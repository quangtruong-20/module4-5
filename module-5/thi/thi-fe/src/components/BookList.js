import {useEffect, useState} from "react";
import {findAll, findAllType, remove} from "../service/bookService";
import {Link, NavLink} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import Header from "./Header";
import Footer from "./Footer";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ReactPaginate from "react-paginate";
import ModalDelete from "./ModalDelete";

export default function BookList() {
    const [book, setBook] = useState([]);
    const [bookType, setBookType] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [filters, setFilters] = useState({
        page: 0,
        name: "",

    });
    const handlePageClick = (event) => {
        setFilters((prev) => ({ ...prev, page: event.selected }));
    };
    const [deletedObject, setDeletedObject] = useState({
        deletedId: "",
        deletedName: "",
    });

    const handleTransferInfo = (deletedObject) => {
        setDeletedObject((prev) => ({ ...prev, ...deletedObject }));
    };
    const handleDelete = async () => {
        try {
            await remove(deletedObject.deletedId);
            const newFilters = {...filters}
            setFilters(newFilters)
            toast("Xóa thành công");
        } catch (error) {
            console.warn(error);
            toast("Xóa thất bại");
        }
    };

    useEffect(() => {
            const listBooks = async () => {
                const rs = await findAll(filters);
                setBook(rs.data.content);
                setPageCount(rs.data.totalPages);
            }
            const listBookType = async () => {
                const rs = await findAllType();
                setBookType(rs.data);
            }
            listBooks();
            listBookType();
        },
        [filters])

    return (
        <>
            <Header/>
            <div className="p-3">
                <h2 className="text-center fw-bold my-3">DANH SÁCH BOOKS</h2>
                <Formik initialValues={{name: ''}}
                        onSubmit={(values) => {
                            setFilters((prev) => {
                                return { ...prev, ...values, page: 0 };
                            });
                        }}>
                    <Form className="d-flex" role="search">
                        <Field name={'name'} placeholder={'Search...'} className="form-control me-2" type="search"
                               aria-label="Search"/>
                        <button className="btn btn-outline-success" type={'submit'}>Tìm</button>

                    </Form>
                </Formik>

                <NavLink to={'/create'} className={'btn btn-primary'} style={{
                    marginTop: "15px",
                    marginBottom: "15px"
                }}>
                    create
                </NavLink>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th className="text-center">Mã sách</th>
                        <th>Tên sách</th>
                        <th>Ngày nhập sách</th>
                        <th>Số lượng</th>
                        <th>Thể loại</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        Object.values(book).map((value, index) => (
                            <tr key={index}>
                                <th>{value.id}</th>
                                <td>{value.name}</td>
                                <td>{value.date}</td>
                                <td>{value.amount}</td>
                                <td>
                                    {
                                     bookType.filter((bt) => bt.id === value.bookType.id)[0]?.name
                                    }
                                </td>
                                <td>
                                    <Link to={`/edit/${value.id}`} className="btn btn-primary me-3" >
                                        Sửa
                                    </Link>
                                    <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() =>
                                        handleTransferInfo({
                                            deletedId: value.id,
                                            deletedName: value.name,
                                        })
                                    }
                                >
                                    Delete
                                </button></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <ModalDelete
                deletedId={deletedObject.deletedId}
                deletedName={deletedObject.deletedName}
                onCompletedDelete={handleDelete}
            />
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
            <Footer/>
            <ToastContainer/>
        </>
    )
}