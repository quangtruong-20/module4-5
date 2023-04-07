import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import * as bookService from '../service/bookService'
import {TailSpin} from "react-loader-spinner";
import {toast} from "react-toastify";


export default function BookCreate(){
let navigate = useNavigate();



    return (
        <>
        <Formik initialValues={{title: '',quantity:''}}
                    onSubmit={(values,{setSubmitting})=>{
                        const create = async () => {
                          await bookService.save(values)
                            setSubmitting(false);
                            toast('Thêm mới thành công!');
                            navigate('/')
                        }
                        create()
                    }
                }>
            {({isSubmitting}) => (
            <Form>
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
                        <button type='submit' className='btn btn-primary'>Add</button>
                }
            </Form>)}
        </Formik>


        </>
    )
}