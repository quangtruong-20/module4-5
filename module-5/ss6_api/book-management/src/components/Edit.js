import {useNavigate, useParams} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import * as bookService from '../service/bookService';
import {toast} from "react-toastify";
import {TailSpin} from "react-loader-spinner";
import {useEffect, useState} from "react";

// export default function Edit() {
//     let navigate = useNavigate();
//     return (
//         <>
//             <Formik initialValues={{id:'' , title:'' , quantity: ''}}
//                     onSubmit={(values, {setSubmitting}) => {
//
//                         setTimeout(() => {
//
//                             const edit = async (id, values) => {
//                                 try {
//                                     await bookService.edit(id,values);
//                                     setSubmitting(false);
//                                     toast('Sửa thành công!');
//                                     navigate('/');
//                                 } catch (err) {
//                                     console.log(err);
//                                 }
//                             }
//
//                             edit(values.id, values)
//
//                         }, 500);
//                     }
//                     }>
//                 {({isSubmitting}) => (
//
//                     <Form>
//                         <h1>Update a book</h1>
//
//                         <Field type="hidden" name="id"  className="form-control"/>
//                         <div className="mb-3">
//                             <label htmlFor="title">Title</label>
//                             <Field type="text" name="title"  id={"title"}  className="form-control"/>
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="quantity">Quantity</label>
//                             <Field type="number" name="quantity"  id="quantity"  className="form-control"/>
//                         </div>
//                         {
//                             isSubmitting ?
//                                 <TailSpin
//                                     height="80"
//                                     width="80"
//                                     color="#4fa94d"
//                                     ariaLabel="tail-spin-loading"
//                                     radius="1"
//                                     wrapperStyle={{}}
//                                     wrapperClass=""
//                                     visible={true}
//                                 />
//                                 :
//                                 <button type='submit' className='btn btn-primary'>Update</button>
//                         }
//
//                     </Form>)}
//             </Formik>
//
//
//         </>
//     )
// }

export default function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            const result = await bookService.findById(id);
            setBook(result);
        }
        fetchBook();
    }, [id]);

    const handleUpdate = async (values) => {
        try {
            await bookService.edit(id, values);
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
                initialValues={{id: book.id, title: book.title, quantity: book.quantity}}
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
