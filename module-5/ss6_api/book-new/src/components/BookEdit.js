import {useNavigate, useParams} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import * as bookService from "../service/bookService";
import {toast} from "react-toastify";
import {TailSpin} from "react-loader-spinner";
import {useEffect, useState} from "react";

export default function BookEdit(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [book,setBook] = useState(null);
    useEffect(()=>{
        const findId = async () => {
          const result = await bookService.findById(id);
          setBook(result);
        }
        findId();
    },[id]);
    if (!book){
        return null;
    }

    return (
        <>
            <Formik initialValues={{id: book.id, title: book.title, quantity: book.quantity}}
                    onSubmit={(values,{setSubmitting})=>{
                        const update = async () => {
                            await bookService.edit(values)
                            setSubmitting(false);
                            toast('sửa thành công!');
                            navigate('/')
                        }
                        update()
                    }
                    }>
                {({isSubmitting}) => (
                    <Form>
                        <h1>Update book</h1>
                        <div>
                            <label >Title</label>
                            <Field type={'text'} name={'title'} />
                        </div>

                        <div>
                            <label >Quantity</label>
                            <Field type={'number'} name={'quantity'} />
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
                    </Form>)}
            </Formik>
        </>
    )

}