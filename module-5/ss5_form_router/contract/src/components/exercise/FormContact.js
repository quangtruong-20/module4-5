import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'
export default function FormContact() {
    return (

        <>
        <Formik initialValues={{name:'',email:'',phone:'',message:''}}
                validationSchema={Yup.object({
                    name : Yup.string().required('Required.'),
                    email : Yup.string().required('Required.'),
                    phone : Yup.number().required('Required.'),
                })}
                onSubmit={(values,{setSubmitting}) => {
                setSubmitting(false);
                   alert('thêm liên hệ thành công')
                }
                }>
        <Form>
                <h1>Contact Form</h1>
            <div className="mb-3">
                <label htmlFor="">Name</label>
                <Field type="text" name="name"  className="form-control" />
                <ErrorMessage name='name' component='span' className='form-err'/>
            </div>

            <div className="mb-3">
                <label htmlFor="email">email</label>
                <Field type="text" name="email" id="email" className="form-control" />
                <ErrorMessage name='email' component='span' className='form-err'/>

            </div>

            <div className="mb-3">
                <label htmlFor="phone">phone</label>
                <Field type="number" name="phone" id="phone" className="form-control" />
                <ErrorMessage name='phone' component='span' className='form-err'/>

            </div>

            <div className="mb-3">
                <label htmlFor="message">message</label>
                <Field type="text" name="message" component='textArea' id="message" className="form-control" />

            </div>

            <button type='submit' className='btn btn-primary'>Submit</button>

        </Form>
        </Formik>

        </>
    )

}