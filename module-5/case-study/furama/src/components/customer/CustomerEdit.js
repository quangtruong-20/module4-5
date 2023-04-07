import Header from "../header/Header";
import Footer from "../footer/Footer";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {TailSpin} from "react-loader-spinner";

function CustomerEdit() {
    return (
        <>
            <Header/>
            <div id="container">
                <Formik initialValues={{
                    name: '', dateOfBirth: '', gender: '', identityNumb: '',
                    phoneNumb: '', email: '', typeId: '', address: ''
                }}
                        validationSchema={Yup.object({
                            name: Yup.string().required('Required.'),
                            dateOfBirth: Yup.date().required('Required.'),
                            identityNumb: Yup.number().required('Required.'),
                            phoneNumb: Yup.number().required('Required.'),
                            address: Yup.string().required('Required.'),
                            email: Yup.string().required('Required.').email('Invalid email address'),
                        })}
                        onSubmit={(values, {setSubmitting}) => {
                            setSubmitting(false);
                            toast("Update success!");
                        }
                        }>
                    {({isSubmitting}) => (
                        <Form className="form" style={{textAlign: 'center'}}>


                            <h1 style={{marginLeft: '40%', marginTop: '50px'}}>Sửa khách hàng</h1>

                            <div style={{marginRight: '500px', marginLeft: '500px', color: 'white'}}>
                                <div>
                                    <label className="form-label animationTop delay-03">Customer Name:</label>
                                    <Field className="form-control animationTop delay-04" type="text" name={'name'}
                                    />
                                    <ErrorMessage name='name' component='span' className='form-err'/>
                                </div>

                                <div>
                                    <label className="form-label animationTop delay-05"> Day Of Birth :</label>
                                    <Field className="form-control animationTop delay-06" type="date"
                                           name={'dateOfBirth'}
                                    />
                                    <ErrorMessage name='dateOfBirth' component='span' className='form-err'/>
                                    <div>
                                        <label className="form-label animationTop delay-07">Gender :</label>
                                        <select style={{fontSize: '15px', textAlign: 'center'}} name={'gender'}
                                                value={'gender'} className="animationTop delay-08">
                                            <option value="">Gender:</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="form-label animationTop delay-08">ID Card :</label>
                                        <Field className="form-control animationTop delay-09" type="text"
                                               name={'identityNumb'}/>
                                        <ErrorMessage name='identityNumb' component='span' className='form-err'/>
                                    </div>

                                    <div>
                                        <label className="form-label animationTop delay-11">Phone Number :</label>
                                        <Field className="form-control animationTop delay-12" type="text"
                                               name={'phoneNumb'}

                                        />
                                        <ErrorMessage name='phoneNumb' component='span' className='form-err'/>
                                    </div>

                                    <div>
                                        <label className="form-label animationTop delay-13">Email :</label>
                                        <Field className="form-control animationTop delay-14" type="text"
                                               name={'email'}/>
                                        <ErrorMessage name='email' component='span' className='form-err'/>
                                    </div>

                                    <div>
                                        <label className="form-label animationTop delay-15">Address :</label>
                                        <Field className="form-control animationTop delay-16" type="text"
                                               name={'address'}/>
                                        <ErrorMessage name='address' component='span' className='form-err'/>
                                    </div>

                                    <div>
                                        <label className="form-label animationTop delay-17">Customer Type :</label>
                                        <select style={{fontSize: '15px'}} className="animationTop delay-18"
                                                name={'typeId'}>
                                            <option value="">Customer type :</option>
                                            <option value="1">Diamond</option>
                                            <option value="2">Gold</option>
                                            <option value="3">Platinum</option>
                                        </select>
                                    </div>

                                </div>

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
                                    <button style={{textAlign: 'center'}} type="submit"
                                            className="m-3 btn btn-info animationTop delay-19">Submit</button>
                            }

                        </Form>
                    )}
                </Formik>


            </div>
            <Footer/>
            <ToastContainer/>
        </>)
}

export default CustomerEdit;