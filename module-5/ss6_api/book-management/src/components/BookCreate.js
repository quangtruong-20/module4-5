import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import * as bookService from '../service/bookService';
import {toast} from "react-toastify";
import {TailSpin} from "react-loader-spinner";
import {useEffect, useState} from "react";

export default function BookCreate() {
    let navigate = useNavigate()
    const [bookTypes, setBookTypes] = useState([]);
    useEffect(() => {
        const fetchBookTypes = async () => {
            const types = await bookService.getAllBookType(); // replace with your actual book service call
            setBookTypes(types);
        };

        fetchBookTypes();
    }, []);
    return (
        <>
            
            <Formik initialValues={{id: '',title: '', quantity: '', bookType: null}}
                    onSubmit={(values, {setSubmitting}) => {
                            const create = async () => {
                                const data = {
                                    ...values,
                                    bookType: +values.bookType
                                }
                                await bookService.save(data)
                                console.log(data)
                                setSubmitting(false);
                                toast('Thêm mới thành công!');
                                navigate('/')
                            }
                            create()
                    }
                    }>
                {({isSubmitting}) => (
                    <Form>
                        <h1>Add a new book</h1>
                        <div className="mb-3">
                            <label htmlFor="title">Title</label>
                            <Field type="text" name="title" id={"title"} className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="quantity">Quantity</label>
                            <Field type="number" name="quantity" id="quantity" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <Field as="select" className="form-control" name="bookType" component="select">
                                <option value="">Select Book Type</option>
                                {bookTypes.map((bookType) => (
                                    <option  value={bookType.id}>
                                        {bookType.name}
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
                                <button type='submit' className='btn btn-primary'>Add</button>
                        }

                    </Form>)}
            </Formik>


        </>
    )
}