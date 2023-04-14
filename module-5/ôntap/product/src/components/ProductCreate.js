import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {findAllProductType, findById, save} from "./productService";
import {useNavigate, useParams} from "react-router-dom";

export default function ProductCreate() {
    const navigate = useNavigate();
    const [productType, setProductType] = useState([]);
    useEffect(() => {

        const listProductType = async () => {
            const rt = await findAllProductType();
            setProductType(rt.data);
        }

        listProductType();

    }, [])

    return(
        <>
            <Formik initialValues={
                {id:'',name:'',price:'',productTypeId:''}
            } onSubmit={(values)=>{
                const create = async () => {

                        const data =  {
                          ...values,
                            productTypeId: +values.productTypeId
                        }
                  await save(data);
                    navigate('/')
                }
                create()
            }


            }>
            <Form>
                <h1>Tạo mới</h1>
                <div>
                    <label htmlFor={'name'}>name</label>
                    <Field name={'name'} type={'text'} id={'name'} />
                </div>
                <div>
                    <label htmlFor={'price'}>price</label>
                    <Field name={'price'} type={'text'} id={'price'} />
                </div>
                <div>
                    <label htmlFor={'productTypeId'}>type</label>
                    <Field name={'productTypeId'} as="select" id={'productTypeId'} >
                        {productType.map(pt=>(
                        <option value={pt.id}>{pt.name}</option>
                        ))}
                    </Field>
                </div>

                <button type={'submit'}>Tao moi</button>
            </Form>

            </Formik>
        </>
    )
}