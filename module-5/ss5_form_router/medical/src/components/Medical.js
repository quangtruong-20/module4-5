import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {Audio, TailSpin} from 'react-loader-spinner'
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Medical() {

    return(

        <>
            <div className='container'>
            <Formik initialValues={{name:'',cmnd:'',year:'',gender:'',nationality:'',company:'',part:'',insurance:'',
                conscious:'',district:'',commune:'',house:'',phone:'',email:'',go:'',sick:'',contact:''}}
                    validationSchema={Yup.object({
                        name : Yup.string().required('Required.'),
                        cmnd : Yup.string().required('Required.'),
                        year : Yup.number().required('Required.').min(1900),
                        nationality : Yup.string().required('Required.'),
                        conscious : Yup.string().required('Required.'),
                        district : Yup.string().required('Required.'),
                        commune : Yup.string().required('Required.'),
                        house : Yup.string().required('Required.'),
                        email : Yup.string().required('Required.').email('Invalid email address'),
                        phone : Yup.number().required('Required.'),
                    })}
                    onSubmit={(values,{setSubmitting}) => {
                        setTimeout( ()=> {
                        setSubmitting(false);
                        toast("quá dễ!");
                        }, 2000);

                    }
                    }>
                {({isSubmitting}) => (

                <Form style={{width :'max-content'}}>
                    <h1 >Tờ khai y tế</h1>
                    <div className="mb-3">
                        <label htmlFor="">Họ và tên</label>
                        <Field type="text" name="name"  className="form-control" />
                        <ErrorMessage name='name' component='span' className='form-err'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Số hộ chiếu/CMND</label>
                        <Field type="number" name="cmnd"  className="form-control" />
                        <ErrorMessage name='cmnd' component='span' className='form-err'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Năm sinh</label>
                        <Field type="text" name="year"  className="form-control" />
                        <ErrorMessage name='year' component='span' className='form-err'/>
                    </div>
                    <div className="mb-3">
                        <label >Giới tính</label>
                        <div className='form-check form-check-inline'>
                        <Field type="radio" name="gender" id='rd-1' className="form-check-input" value = '0' />
                        <label htmlFor="rd-1">Nam</label>
                        </div>
                        <div className='form-check form-check-inline'>
                            <Field type="radio" name="gender" id='rd-2' className="form-check-input" value = '1' />
                            <label htmlFor="rd-2">Nữ</label>
                        </div>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Quốc tịch</label>
                        <Field type="text" name="nationality"  className="form-control" />
                        <ErrorMessage name='nationality' component='span' className='form-err'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Công ty làm việc</label>
                        <Field type="text" name="company"  className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Bộ phận làm việc</label>
                        <Field type="text" name="part"  className="form-control" />
                    </div>
                    <div className="mb-3">

                        <label >Có thẻ bảo hiểm y tế </label>
                        <div className='form-check form-check-inline'>
                            <Field type="checkbox" name="insurance" id='bd-1' className="form-check-input" value = '3' />
                            <label htmlFor="bd-1"></label>
                        </div>
                    </div>
                    <h2>Địa chỉ liên lạc tại Việt Nam</h2>
                    <div className="mb-3">
                        <label htmlFor="">Tỉnh thành</label>
                        <Field type="text" name="conscious"  className="form-control" />
                        <ErrorMessage name='conscious' component='span' className='form-err'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Quận /huyện</label>
                        <Field type="text" name="district"  className="form-control" />
                        <ErrorMessage name='district' component='span' className='form-err'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Phường /xã</label>
                        <Field type="text" name="commune"  className="form-control" />
                        <ErrorMessage name='commune' component='span' className='form-err'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">So nhà, phố, tổ dân phố /thôn /đội</label>
                        <Field type="text" name="house"  className="form-control" />
                        <ErrorMessage name='house' component='span' className='form-err'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone">Điện thoại</label>
                        <Field type="number" name="phone" id="phone" className="form-control" />
                        <ErrorMessage name='phone' component='span' className='form-err'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <Field type="text" name="email" id="email" className="form-control" />
                        <ErrorMessage name='email' component='span' className='form-err'/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="go"><b>Trong vòng 14 ngày qua,Anh/Chị có đến quốc gia /vùng lãnh thổ nào (Có thể đi qua nhiều quốc gia)?</b></label>
                    <Field type="text" name="go" component='textArea' id="go" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="go"><b>Trong vòng 14 ngày qua,Anh/Chị có thấy xuất hiện dấu hiệu nào sau đây không ?</b></label>
                        <Field type="text" name="sick" component='textArea' id="sick" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="go"><b>Trong vòng 14 ngày qua,Anh/Chị có tiếp súc với?</b></label>
                        <Field type="text" name="contact" component='textArea' id="contact" className="form-control" />
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
                            <button type='submit' className='btn btn-primary'>Submit</button>
                    }


                </Form>


                )}
            </Formik>
            </div>
            <ToastContainer />
        </>
    )

}