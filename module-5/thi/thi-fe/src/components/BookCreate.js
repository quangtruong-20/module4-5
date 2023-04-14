import {useEffect, useState} from "react";
import {findAllType, save} from "../service/bookService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import * as Yup from "yup"
import {toast} from "react-toastify";

export default function BookCreate() {
    const [book, setBook] = useState([]);
    const [bookTypes, setBookTypes] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const listBookType = async () => {
            const rs = await findAllType();
            setBookTypes(rs.data);
        }

        listBookType();
    }, [])


    return (
        <>
            <Header/>
            <div id="container">
                <Formik initialValues={{id: '', name: '', date: '', bookType: null, amount: ''}}
                        validationSchema={Yup.object({
                            id: Yup.string().required('Không dc bỏ trống'),
                            name: Yup.string().required('Tên sách không dài quá 100 ký tự').max(100),
                            amount: Yup.number().required('Số lượng sách phải là số nguyên dương').moreThan(0),
                            date: Yup.string().required('Không dc bỏ trống.'),

                        })}
                        onSubmit={(values) => {

                            const rss = {
                                ...values,
                                bookType: { id: +values.bookType }
                            }

                            const create = async () => {
                                const rs = await save(rss)
                                setBook(rs.data)
                                toast('thêm mới thành công')
                                navigate('/')
                            }
                            create()
                        }
                        }>
                    <Form>
                        <div>
                            <h1 style={{color: "red", textAlign: "center"}}>Thêm mới Sách</h1>
                        </div>
                        <div className="card container bg-transparent" style={{width: "428px"}}>
                            <div className="card-body">
                                <div>
                                    <label className="form-label animationTop delay-03" htmlFor={'id'}>Mã sách:</label>
                                    <Field className="form-control animationTop delay-04" type="text" name='id'
                                           id={'id'}/>
                                    <ErrorMessage name={'id'} className={'err'}/>
                                </div>
                                <div>
                                    <label className="form-label animationTop delay-11" htmlFor={'name'}>Tên sách
                                        :</label>
                                    <Field className="form-control animationTop delay-12" type="text" id={'name'}
                                           name='name'/>
                                    <ErrorMessage name={'name'} className={'err'}/>
                                </div>
                                <div>
                                    <label className="form-label animationTop delay-17" htmlFor={'floatingSelect'}>Thể
                                        loại :</label>
                                    <Field name='bookType' as={'select'} className="form-select" id="floatingSelect">
                                        {
                                          bookTypes.map((bt) => (
                                                <option key={bt.id} value={bt.id}> {bt.name}</option>
                                            ))
                                        }

                                    </Field>
                                </div>
                                <div>
                                    <label className="form-label animationTop delay-05" htmlFor={'date'}> Ngày nhập sách
                                        :</label>
                                    <Field className="form-control animationTop delay-06" type="date" id={'date'}
                                           name='date'/>
                                    <ErrorMessage name={'date'} className={"err"}/>

                                </div>

                                <div>
                                    <label className="form-label animationTop delay-08" htmlFor={'amount'}>Số lượng
                                        :</label>
                                    <Field className="form-control animationTop delay-09" type="number" id={'amount'}
                                           name='amount'/>
                                    <ErrorMessage name={'amount'} className={'err'}/>

                                </div>

                            </div>

                            <button style={{textAlign: "center"}} type="submit"
                                    className="m-3 btn btn-info animationTop delay-19">Submit
                            </button>

                        </div>
                    </Form>
                </Formik>
            </div>
            <Footer/>
        </>
    )
}