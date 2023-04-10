import Header from "../header/Header";
import Footer from "../footer/Footer";
import {NavLink} from "react-router-dom";
import ModalDelete from "../modal/modalDelete";
import {useEffect, useState} from "react";
import customerService from "../../service/customer/customerService";

function CustomerList() {
    const [customerList, setCustomerList] = useState([]);
    const [customerType, setCustomerType] = useState([]);
    const [deletedId, setDeleteId] = useState(0);
    const [deletedName, setDeleteName] = useState("");


    const getCustomerList = async () => {
        const customerData = await customerService.findAll();
        console.log(customerData)
        setCustomerList(customerData);
    };

    const getCustomerTypeList = async () => {
        const customerTypeData = await customerService.getAllCustomerType();
        setCustomerType(customerTypeData);
    };

    useEffect(() => {
        getCustomerList();
        getCustomerTypeList();
    }, []);

    const getCustomerInfo = (id, name) => {
        setDeleteId(id);
        setDeleteName(name);
    };
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
                        <th >Chức năng</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customerList?.map((customer, index) => (
                        <tr key={index}>
                            <th scope="row">{++index}</th>
                            <td>{customer.name}</td>
                            <td>{parseInt(customer.gender) === 0 ? "nam" : "nữ"}</td>
                            <td>{customer.dateOfBirth}</td>
                            <td>{customer.identityNumb}</td>
                            <td>{customer.phoneNumb}</td>
                            <td>{customer.email}</td>
                            <td>{customer.address}</td>
                            <td>  {
                                customerType?.filter(ct => ct.id === customer.customerTypes)[0]?.name
                            }</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    onClick={() =>
                                        getCustomerInfo(
                                            customer.id,
                                            customer.name,
                                        )
                                    }
                                >
                                    {/*<i className="fas fa-trash-alt"></i>*/}
                                    Xóa
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
            <ModalDelete
                id={deletedId}
                name={deletedName}
                getList={() => {
                    getCustomerList();
                }}
            />
            <Footer/>
        </>

    )
}

export default CustomerList;