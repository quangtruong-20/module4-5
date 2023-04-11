import Header from "../header/Header";
import Footer from "../footer/Footer";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import * as Yup from "yup";
import {TailSpin} from "react-loader-spinner";

export default function FacilityCreate() {
    return (
        <div>
            <Header/>

            <Formik initialValues={{
                id: '', img: '', name: '', area: '', price: '', maxPeople: '',
                rentType: '', facilityTypes: '', standardRoom: '', description: '',
                poolArea: ''
                , numberOfFloors: '', facilityFree: '', facilityService: ''
            }}
                    validationSchema={Yup.object({
                        name: Yup.string().required('Required.'),
                        area: Yup.number().required('Required.'),
                        img: Yup.string().required('Required.'),
                        price: Yup.number().required('Required.'),
                        maxPeople: Yup.number().required('Required.'),
                        standardRoom: Yup.string().required('Required.'),
                        description: Yup.string().required('Required.'),
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
                        <div className="card-header">
                            <strong id="inDam"><h1 className="card-title"
                                                   style={{color: 'red', textAlign: "center"}}>Tạo mới dịch vụ</h1>
                            </strong>
                        </div>
                            <div className="card container bg-transparent">
                                <div className="card-body">
                                        <div className="form-group">
                                          
                                            <label htmlFor="inputFacility">Facility Type:</label>
                                                <select id="inputFacility" className="form-select" name={'facilityTypeId'}>
                                                    <option value={''}>Vui lòng chọn kiểu dịch vụ</option>
                                                    <option value={'Diamond'}>Diamond</option>
                                                    <option value={'Platinium'}>Platinium</option>
                                                    <option value={'Gold'}>Gold</option>
                                                    <option value={'Silver'}>Silver</option>
                                                </select>


                                        </div>

                                        <div className="form-group" >
                                            <label className="inputName">Name:</label>
                                            <Field  placeholder="Facility name" className="form-control" id="inputName" type="text" name='name'/>
                                            <ErrorMessage name='name' component='span' className='form-err'/>
                                        </div>
                                        <div className="form-group">
                                            <label>Area:</label>
                                            <Field placeholder="Enter area" className="form-control" type="text" name='area'/>
                                            <ErrorMessage name='area' component='span' className='form-err'/>
                                        </div>
                                        <div className="form-group">
                                            <label>Img:</label>
                                            <Field className="form-control" type="text"
                                                   placeholder="dán link ảnh bạn muốn" name='img'/>
                                            <ErrorMessage name='img' component='span' className='form-err'/>
                                        </div>

                                        <div className="form-group">
                                            <label>Cost:</label>
                                            <Field className="form-control" type="number" name="price"/>
                                            <ErrorMessage name='price' component='span' className='form-err'/>

                                        </div>
                                        <div className="form-group">
                                            <label>Max People:</label>
                                            <Field className="form-control" type="number" name="maxPeople"/>
                                            <ErrorMessage name='maxPeople' component='span' className='form-err'/>


                                        </div>
                                        <div className="form-group">
                                            <label>standardRoom:</label>
                                            <Field className="form-control" type="number" name="standardRoom"/>
                                            <ErrorMessage name='standardRoom' component='span' className='form-err'/>

                                        </div>

                                        <div className="form-group">
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
                                        <div className="form-group">
                                            <label className="form-label"
                                            >Description:</label>
                                            <Field className="form-control" type="text" name='otherAmenities'
                                            />
                                            <ErrorMessage name='otherAmenities' component='span' className='form-err'/>

                                        </div>
                                        <div className="form-group"
                                        >
                                            <label className="form-label">Area of pool:</label>
                                            <Field

                                                className="form-control" type="number" name="poolArea"/>
                                            <ErrorMessage name='poolArea' component='span' className='form-err'/>

                                        </div>

                                        <div className="form-group"
                                        >
                                            <label className="form-label">Number of Floors:</label>
                                            <Field className="form-control" type="number"
                                                   name="numberOfFloors"/>
                                            <ErrorMessage name='numberOfFloors' component='span' className='form-err'/>

                                        </div>
                                        <div>
                                            <p className="form-group">
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

                                </div>
                            </div>
                    </Form>)}

            </Formik>

            <Footer/>
        </div>
    )
}


