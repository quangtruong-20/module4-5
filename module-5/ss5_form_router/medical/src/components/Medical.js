import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'

export default function Medical() {

    return(

        <>
            <Formik initialValues={{name:'',cmnd:'',year:'',gender:'',nationality:'',company:'',part:'',insurance:'',
                conscious:'',district:'',commune:'',house:'',phone:'',email:'',go:'',sick:'',contact:''}}
                    validationSchema={Yup.object({
                        name : Yup.string().required('Required.'),
                        cmnd : Yup.string().required('Required.'),
                        year : Yup.string().required('Required.').min(1900),
                        nationality : Yup.string().required('Required.'),
                        conscious : Yup.string().required('Required.'),
                        district : Yup.string().required('Required.'),
                        commune : Yup.string().required('Required.'),
                        house : Yup.string().required('Required.'),
                        email : Yup.string().required('Required.').email('Invalid email address'),
                        phone : Yup.number().required('Required.'),
                    })}
                    onSubmit={(values,{setSubmitting}) => {
                        setSubmitting(false);
                        alert('thêm liên hệ thành công')
                    }
                    }>

                <Form>
                    <h1 style={{textAlign:'center'}}>Tờ khai y tế</h1>
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
                        <label htmlFor="">Giới tính</label>
                        <Field type="text" name="gender"  className="form-control" />
                        <ErrorMessage name='gender' component='span' className='form-err'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Quoc tịch</label>
                        <Field type="text" name="name"  className="form-control" />
                        <ErrorMessage name='name' component='span' className='form-err'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Công ty làm việc</label>
                        <Field type="text" name="name"  className="form-control" />
                        <ErrorMessage name='name' component='span' className='form-err'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Bộ phận làm việc</label>
                        <Field type="text" name="name"  className="form-control" />
                        <ErrorMessage name='name' component='span' className='form-err'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Có thẻ bảo hiểm y tế</label>
                        <Field type="text" name="name"  className="form-control" />
                        <ErrorMessage name='name' component='span' className='form-err'/>
                    </div>
                    <h2>Địa chỉ liên lạc tại Việt Nam</h2>
                    <div className="mb-3">
                        <label htmlFor="">Tỉnh thành</label>
                        <Field type="text" name="name"  className="form-control" />
                        <ErrorMessage name='name' component='span' className='form-err'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Quận /huyện</label>
                        <Field type="text" name="name"  className="form-control" />
                        <ErrorMessage name='name' component='span' className='form-err'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Phường /xã</label>
                        <Field type="text" name="name"  className="form-control" />
                        <ErrorMessage name='name' component='span' className='form-err'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">So nhà, phố, tổ dân phố /thôn /đội</label>
                        <Field type="text" name="name"  className="form-control" />
                        <ErrorMessage name='name' component='span' className='form-err'/>
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
                    <label htmlFor="go">Trong vòng 14 ngày qua,Anh/Chị có đến quốc gia /vùng lãnh thổ nào (Có thể đi qua nhiều quốc gia)</label>
                    <Field type="text" name="go" component='textArea' id="go" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="go">Trong vòng 14 ngày qua,Anh/Chị có thấy xuất hiện dấu hiệu nào sau đây không ?</label>
                        <Field type="text" name="go" component='textArea' id="go" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="go">Trong vòng 14 ngày qua,Anh/Chị có tiếp súc với?</label>
                        <Field type="text" name="go" component='textArea' id="go" className="form-control" />
                    </div>

                    <button type='submit' className='btn btn-primary'>Submit</button>

                </Form>
            </Formik>

        </>
    )

}