import {useNavigate, useParams} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import * as bookService from '../service/bookService';
import {toast} from "react-toastify";
import {TailSpin} from "react-loader-spinner";
import {useEffect, useState} from "react";

export default function BookEdit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [bookTypes, setBookTypes] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const bookData = await bookService.findById(id);
                setBook(bookData);

                const bookTypesData = await bookService.getAllBookType();
                setBookTypes(bookTypesData);
            } catch (error) {
                console.error('Error fetching book data:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleUpdate = async (values) => {
        try {
            const data = {
                ...values,
                bookType: +values.bookType
            }
            await bookService.edit(data);
            console.log(data)
            toast('Sửa thành công!');
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    if (!book) {
        return (
            <>
                <h1>Loading...</h1>
                <TailSpin
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </>
        )
    }

    return (
        <>
            <Formik
                initialValues={{id: book.id, title: book.title, quantity: book.quantity,
                    bookType: book.bookType}}
                onSubmit={async (values) => {
                    await handleUpdate(values);
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <h1>Update a book</h1>
                        <Field type="hidden" name="id" className="form-control"/>
                        <div className="mb-3">
                            <label htmlFor="title">Title</label>
                            <Field type="text" name="title" id="title" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="quantity">Quantity</label>
                            <Field type="number" name="quantity" id="quantity" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="bookType">Type</label>
                            <Field as="select" name="bookType" id="bookType" className="form-control">
                                {bookTypes.map(type => (
                                    <option key={type.id} value={type.id}>
                                        {type.name}
                                    </option>
                                ))}
                            </Field>
                        </div>
                        {
                            isSubmitting ?
                                <TailSpin
                                    height="80"
                                    width="80"
                                    color="#4fa94d"
                                    ariaLabel="tail-spin-loading"
                                    radius="1"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                />
                                :
                                <button type='submit' className='btn btn-primary'>Update</button>
                        }

                    </Form>
                )}
            </Formik>
        </>
    )
}
