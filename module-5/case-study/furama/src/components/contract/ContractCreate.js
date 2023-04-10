import Header from "../header/Header";
import Footer from "../footer/Footer";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {TailSpin} from "react-loader-spinner";

function ContractCreate() {
    return (
        <>
            <Header/>

            <Formik initialValues={{
                contractCode: '', startDate: '', endDate: '', deposit: '',
                totalMoney: '',id:'',customerId:'',facilityId:''
            }}
                    validationSchema={Yup.object({
                        customerId: Yup.number().required('Required.'),
                        facilityId: Yup.number().required('Required.'),
                        contractCode: Yup.string().required('Required.'),
                        startDate: Yup.date().required('Required.'),
                        endDate: Yup.date().required('Required.'),
                        deposit: Yup.number().required('Required.'),
                        totalMoney: Yup.number().required('Required.')
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        setSubmitting(false);
                        toast("create success!");
                    }
                    }>
                {({isSubmitting}) => (
                <Form>
            <div className="card-header">
                <strong id="inDam"><h1 className="card-title" style={{color: 'red', textAlign: "center"}}>Tạo mới hợp
                    đồng</h1></strong>
            </div>
                <div className="card-body">
                    <div style={{textAlign: 'center', marginLeft: '449px', width: '93%'}}>
                        <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                            <label className="form-label" htmlFor="facility">Tên hợp đồng</label>
                            <Field style={{width: '100%', height: ' 70%'}} name={'contractCode'} id="facility"/>
                            <ErrorMessage name='contractCode' component='span' className='form-err'/>

                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                            <label className="form-label" htmlFor="name_customer">Tên khách hàng</label>
                            <Field style={{width: '100%', height: ' 70%'}} name={'customerId'} id="name_customer"/>
                            <ErrorMessage name='customerId' component='span' className='form-err'/>

                        </div>

                        <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                            <label className="form-label" htmlFor="dayStart">Ngày bắt đầu:</label>
                            <Field type="date" name={'startDate'} className="form-control time-mask" placeholder="?" id="dayStart"/>
                            <ErrorMessage name='startDate' component='span' className='form-err'/>

                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                            <label className="form-label" htmlFor="endDateForm">Ngày kết thúc:</label>
                            <Field type="text" className="form-control numeral-mask" name={'endDate'}
                                   id="endDateForm"/>
                            <ErrorMessage name='endDate' component='span' className='form-err'/>

                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                            <label className="form-label" htmlFor="deposit">Tiền đặt cọc (VNĐ):</label>
                            <Field type="number" name={'deposit'} className="form-control block-mask"  id="deposit"/>
                            <ErrorMessage name='deposit' component='span' className='form-err'/>

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
                                    className="m-3 btn btn-info animationTop delay-19">Lưu</button>
                    }

                </Form>
                )}
            </Formik>


            <Footer/>
        </>)
}

export default ContractCreate;