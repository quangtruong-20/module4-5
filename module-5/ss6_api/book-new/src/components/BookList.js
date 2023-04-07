import {useEffect, useState} from "react";
import * as bookService from '../service/bookService'
import {useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Button, Modal} from "react-bootstrap";
export default function BookList() {
    const [book,setBook] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        const fechtApi = async () => {
            const result = await bookService.findAll()
            setBook(result);
        }
        fechtApi()
    },[])

    const handleDelete = async (id) => {
        await bookService.delete2(id)
        setBook(book.filter(book =>book.id !== id))
        toast.success('Delete success!')

    };
    const handleUpdate = (id) => {
      navigate(`/book-edit/${id}`);
    };
    const handleCreate = () => {
        return navigate(`/book-create`);
    };
    return(

        <>
        <h1>Library</h1>
            <button className={'btn btn-danger'} onClick={handleCreate}>create</button>
            <table className="table table-striped table-inverse table-responsive">
                <thead className="thead-inverse">
                <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {book?.map((values,index)=>(
                <tr key={index}>
                    <td>{values.title}</td>
                    <td>{values.quantity}</td>
                    <td>
                        <button className={'btn btn-dark'} type={'submit'} onClick={()=>handleDelete(values.id)}> delete</button>
                        <button className={'btn btn-primary'} type={'submit'} onClick={()=>handleUpdate(values.id)}> update</button>
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
            <ToastContainer/>

        </>
    )
}


