import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import * as bookService from '../service/bookService';
import {NavLink} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function BookList() {
    const [book, setBook] = useState([]);
    const [bookType, setBookType] = useState([]);

    const navigate = useNavigate();
    useEffect(() => {
        const fetchApi = async () => {
            const result = await bookService.findAll()
            setBook(result);
        }

        const fetchBookType = async () => {
            const result = await bookService.getAllBookType()
            setBookType(result);
        }
        fetchApi()
        fetchBookType();
    }, [])

    const handleUpdate = (id) => {
        navigate(`/update/${id}`);
    }

    async function handleDelete(id) {
        try {
            await bookService.delete1(id);
            setBook(book.filter(book => book.id !== id));
            toast.success('Delete successfully!');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h1>Library</h1>
            <div className="element-button mb-5">
                <NavLink
                    className="btn btn-add btn-sm bg-success text-white"
                    to={'/create'}>
                    Add a new book
                </NavLink>
            </div>
            {book.length > 0 ? (
            <table className="table table-striped table-inverse table-responsive">
                <thead className="thead-inverse">

                <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {book?.map((value, index) => (
                    <tr key={index}>
                        <td>{value.title}</td>
                        <td>{value.quantity}</td>
                        <td>
                            {
                                bookType?.filter(bt => bt.id === value.bookType)[0]?.name
                            }
                        </td>

                        <td>
                            <button type={'button'} className={'btn btn-danger'}
                                    onClick={() => handleDelete(value.id)}>Delete</button>
                            <button type={'button'} className={'btn btn-warning ms-2'}
                                    onClick={() => handleUpdate(value.id)}>Update</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>) : (
                <p>No books available.</p>
            )}
            <ToastContainer/>
        </>
    )
}