import {useEffect, useState} from "react";
import {findAll, findAllProductType, remove} from "./productService";
import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {renderDelete} from "./modal";
import ReactPaginate from "react-paginate";

export default function ProductList() {
    const [productList, setProduct] = useState([]);
    const [productType, setProductType] = useState([]);
    const navigate = useNavigate();
    const [pagination,setPagination]=useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const PAGE_SIZE =2 ;
    useEffect(() => {
        const endOffset = itemOffset + PAGE_SIZE;
        setCurrentItems(productList.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(productList.length / PAGE_SIZE));
        let firstPage = document.querySelector(".page-next");
        let lastPage = document.querySelector(".page-previous");
        if (firstPage != null && lastPage != null) {
            if (itemOffset == 0) {
                if (endOffset >= productList.length) {
                    firstPage.style.display = "none";
                    lastPage.style.display = "none";
                } else {
                    firstPage.style.display = "none";
                    lastPage.style.display = "block";
                }
            } else if (endOffset > productList.length) {
                firstPage.style.display = "block";
                lastPage.style.display = "none";
            } else {
                firstPage.style.display = "block";
                lastPage.style.display = "block";
            }
        }
    }, [itemOffset, PAGE_SIZE, productList]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * PAGE_SIZE) % productList.length;
        setItemOffset(newOffset);
    };

    useEffect((result) => {
        const listProduct = async () => {
            const result = await findAll();
            setProduct(result.data);
            setPagination(result.data.slice(0,2));
        }
        const listProductType = async () => {
            const result = await findAllProductType();
            setProductType(result.data);
        }
        listProductType();
        listProduct();
    }, [])


    const handleDelete = (productName,productId) => {
    renderDelete(
        `Do you want to delete product name ${productName}?`,
        async () => {
            await remove(productId);
            const res = await findAll();
            setProduct(res.data);
            setPagination(res.data);
        }
    )
    };
    const handleUpdate = (id) => {
        navigate(`/edit/${id}`)
    };



    return (
        <>
            <h1>Danh sách sản phẩm</h1>
            <Link to={'/create'} type={'button'}>Tạo mới</Link>
           <div>
               <Formik initialValues={{name:''}}
                       onSubmit={
                        async (values) => {
                            const res = await findAll(values.name);
                            setProduct(res.data);
                        }
                       }>

                   <Form>
                       <Field name={'name'} placeholder={'Search...'}/>
                       <button type={'submit'}>Tìm</button>


                   </Form>

               </Formik>


           </div>

            <table>
            <thead>
            <tr>
                <th>name</th>
                <th>price</th>
                <th>type</th>
                <th></th>

            </tr>
            </thead>
            <tbody>
            {
                currentItems.map(pl => (
                    <tr key={pl.id}>
                        <td>{pl.name}</td>
                        <td>{pl.price}</td>
                        <td>
                            {productType.filter(
                                (pt) => pt.id === pl.productTypeId
                            )[0]?.name}
                        </td>
                        <td>
                            <button onClick={()=>handleDelete(pl.name,pl.id)}>Delete</button>
                        </td>
                        <td>
                            <button onClick={()=>handleUpdate(pl.id)}>update</button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
            </table>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="< "
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                nextLinkClassName="page-previous"
                previousLinkClassName="page-next"
                activeClassName="active"
            />
        </>
    )
}