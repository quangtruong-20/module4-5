import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {edit, findAllProductType, findById} from "./productService";
import {useNavigate, useParams} from "react-router-dom";

export default function ProductUpdate() {
    const [productType, setProductType] = useState([]);
    const [product, setProduct] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        const listProductType = async () => {
            const result = await findAllProductType();
            setProductType(result.data);
        }
        const findProductById = async () => {
            const rt = await findById(id);
            console.log(rt.data)
            setProduct(rt.data);
        }

        findProductById()
        listProductType();

    }, [id])
    if (!product){
        return null
    }

    return(
        <>
            <Formik initialValues={
                {id:product.id,
                    name:product.name,
                    price:product.price,
                    productTypeId: product.productTypeId}

            } onSubmit={(values)=>{
                const update = async () => {
                    const data =  {
                        ...values,
                        productTypeId: +values.productTypeId
                    }
                    await edit(data);
                    navigate('/')
                }
                update()
            }


            }>
                <Form>
                    <h1>Update</h1>
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

                    <button type={'submit'}>Cập nhật</button>
                </Form>

            </Formik>
        </>
    )
}