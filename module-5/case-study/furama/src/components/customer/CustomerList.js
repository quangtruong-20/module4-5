import Header from "../header/Header";
import Footer from "../footer/Footer";
import customerList from "../../data/Customer";
import {NavLink} from "react-router-dom";


let stt = 1;

function CustomerList() {

    return (
        <>
            <Header/>
            <div className="p-3">
                <h2 className="text-center fw-bold my-3">DANH SÁCH KHÁCH HÀNG</h2>

                <NavLink to={'/create-customer'}>
                    <button className="btn btn-primary btn-outline-secondary btn-sm">
                        <span className="text-light"> Thêm mới khách hàng</span>
                    </button>
                </NavLink>

                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th className="text-center">#</th>
                        <th>Tên khách hàng</th>
                        <th>Giới tính</th>
                        <th>Ngày sinh</th>
                        <th>Số CMND/CCCD</th>
                        <th>SĐT</th>
                        <th>Email</th>
                        <th>Địa chỉ</th>
                        <th>Loại khách</th>
                        <th className="text-center">Sửa</th>
                        <th className="text-center">Xóa</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customerList.map((customer, index) => (
                        <tr key={index}>
                            <th scope="row">{stt++}</th>
                            <td>{customer.name}</td>
                            <td>{customer.gender}</td>
                            <td>{customer.dateOfBirth}</td>
                            <td>{customer.identityNumb}</td>
                            <td>{customer.phoneNumb}</td>
                            <td>{customer.email}</td>
                            <td>{customer.address}</td>
                            <td>{customer.type}</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                >
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </td>
                            <td>
                                <NavLink
                                    className="btn btn-primary btn-sm edit"
                                    to={'/edit-customer/:id'}>
                                    <i className="fas fa-edit"></i>
                                </NavLink>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <Footer/>
        </>

    )
}

export default CustomerList;