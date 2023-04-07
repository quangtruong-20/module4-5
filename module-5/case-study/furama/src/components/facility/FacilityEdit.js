import Header from "../header/Header";
import Footer from "../footer/Footer";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import * as Yup from "yup";
import {TailSpin} from "react-loader-spinner";

export default function FacilityEdit() {
    return (
        <div>
            <Header/>

            <Formik initialValues={{
                id: '', img: '', name: '', area: '', price: '', maxPeople: '',
                rentalType: '', facilityTypeId: '', standardRoom: '', otherAmenities: '', poolArea: ''
                , numberOfFloors: '', facilityFree: '', rentType: ''
            }}
                    validationSchema={Yup.object({
                        name: Yup.string().required('Required.'),
                        area: Yup.number().required('Required.'),
                        img: Yup.string().required('Required.'),
                        price: Yup.number().required('Required.'),
                        maxPeople: Yup.number().required('Required.'),
                        standardRoom: Yup.string().required('Required.'),
                        otherAmenities: Yup.string().required('Required.'),
                        poolArea: Yup.number().required('Required.'),
                        numberOfFloors: Yup.string().required('Required.'),
                        facilityFree: Yup.string().required('Required.'),
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        setSubmitting(false);
                        toast("create success!");
                    }}>
                {({isSubmitting}) => (
                    <Form>
                        <h1 style={{textAlign: 'center', color: '#0dcaf0'}}>Sửa dịch vụ</h1>

                        <div className="row">
                            <div className="col-md-4">
                                <button className="btn btn-outline-primary">Danh sách</button>
                            </div>
                            <div className="col-md-8">
                                <div style={{textAlign: 'center', justifyContent: 'center'}}>
                                    <form>
                                        <div className="col-md-6">
                                            <label>Facility Type:</label>
                                            <label className="form-label">
                                                <select className="form-select" name={'facilityTypeId'}>
                                                    <option value={''}>Vui lòng chọn kiểu dịch vụ</option>
                                                    <option value={'Diamond'}>Diamond</option>
                                                    <option value={'Platinium'}>Platinium</option>
                                                    <option value={'Gold'}>Gold</option>
                                                    <option value={'Silver'}>Silver</option>

                                                </select>
                                            </label>

                                        </div>

                                        <div className="col-md-6" style={{textAlign: 'center'}}>
                                            <label className="form-label" >Name:</label>
                                            <Field className="form-control" type="text"  name='name' />
                                            <ErrorMessage name='name' component='span' className='form-err'/>
                                        </div>
                                        <div className="col-md-6">
                                            <label >Area:</label>
                                            <Field className="form-control" type="text" name='area' />
                                            <ErrorMessage name='area' component='span' className='form-err'/>
                                        </div>
                                        <div className="col-md-6">
                                            <label>Img:</label>
                                            <Field className="form-control" type="text"
                                                   placeholder="dán link ảnh bạn muốn" name='img'/>
                                            <ErrorMessage name='img' component='span' className='form-err'/>
                                        </div>

                                        <div className="col-md-6">
                                            <label>Cost:</label>
                                            <Field className="form-control" type="number" name="price"/>
                                            <ErrorMessage name='price' component='span' className='form-err'/>

                                        </div>
                                        <div className="col-md-6">
                                            <label>Max People:</label>
                                            <Field className="form-control" type="number" name="maxPeople"/>
                                            <ErrorMessage name='maxPeople' component='span' className='form-err'/>


                                        </div>
                                        <div className="col-md-6">
                                            <label >standardRoom:</label>
                                            <Field className="form-control" type="number" name="standardRoom"/>
                                            <ErrorMessage name='standardRoom' component='span' className='form-err'/>

                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Rent Type:</label>
                                            <label>
                                                <select className="form-select">
                                                    <option>Vui lòng chọn kiểu thuê</option>
                                                    <option>Ngày</option>
                                                    <option>Tháng</option>
                                                    <option>Năm</option>
                                                </select>
                                            </label>

                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label"
                                            >Description:</label>
                                            <Field className="form-control" type="text" name='otherAmenities'
                                            />
                                            <ErrorMessage name='otherAmenities' component='span' className='form-err'/>

                                        </div>
                                        <div className="col-md-6"
                                        >
                                            <label className="form-label">Area of pool:</label>
                                            <Field

                                                className="form-control" type="number" name="poolArea"/>
                                            <ErrorMessage name='poolArea' component='span' className='form-err'/>

                                        </div>

                                        <div className="col-md-6"
                                        >
                                            <label className="form-label">Number of Floors:</label>
                                            <Field className="form-control" type="number"
                                                   name="numberOfFloors"/>
                                            <ErrorMessage name='numberOfFloors' component='span' className='form-err'/>

                                        </div>
                                        <div>
                                            <p className="col-md-6">
                                                <label className="form-label" for="attachFacility">Attach
                                                    Facility:</label>
                                                <Field className="form-control" type="text" name="facilityFree"/>
                                                <ErrorMessage name='facilityFree' component='span'
                                                              className='form-err'/>

                                            </p>
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

                                    </form>
                                </div>
                            </div>
                        </div>
                    </Form>)}

            </Formik>

            <Footer/>
        </div>
    )
}


