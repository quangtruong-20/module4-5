import Header from "../header/Header";
import Footer from "../footer/Footer";
import contractList from "../../data/Contract";
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import customerService from "../../service/customer/customerService";
import contractService from "../../service/contract/contractService";
import ModalDeleteCustomer from "../modal/modalDeleteCustomer";
import ModalDeleteContract from "../modal/modalDeleteContract";
import facilityService from "../../service/facility/facilityService";


function ContractList() {
    const [contractList, setContractList] = useState([]);
    const [customerList, setCustomerList] = useState([]);
    const [facilitiesList, setFacilitiesList] = useState([]);
    const [deletedId, setDeleteId] = useState(0);
    const [deletedName, setDeleteName] = useState("");

    const getContractList = async () => {
        const contractData = await contractService.findAll();
        console.log(contractData)
        setContractList(contractData);
    };
    const getCustomerList = async () => {
        const customerData = await customerService.findAll();
        setCustomerList(customerData);
    };

    const getFacilitiesList = async () => {
        const facilityData = await facilityService.findAll();
        setFacilitiesList(facilityData);
    };


    useEffect(() => {
        getContractList();
        getCustomerList();
        getFacilitiesList();
    }, []);

    const getContractInfo = (id, name) => {
        setDeleteId(id);
        setDeleteName(name);
    };

    return (
        <>
            <Header/>.
            <div className="p-3">
                <h2 className="text-center fw-bold my-3">DANH SÁCH HỢP ĐỒNG</h2>
                <NavLink to={'/create-contract'}>
                    <button className="btn btn-primary btn-outline-secondary btn-sm">
                        <span className="text-light"> Thêm mới hợp đồng</span>
                    </button>
                </NavLink>

                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th className="text-center">#</th>
                        <th>Số hợp đồng</th>
                        <th >Khách hàng</th>
                        <th >Dịch vụ</th>
                        <th>Ngày bắt đầu</th>
                        <th>Ngày kết thúc</th>
                        <th>Tiền đặt cọc</th>
                        <th>Tổng tiền</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {contractList.map((contract, index) => (
                        <tr key={index}>
                            <th scope="row">{++index}</th>
                            <td>{contract.contractCode}</td>
                            <td>
                                {
                                    customerList?.filter(
                                        (customer) => customer.id == contract.customers
                                    )[0]?.name
                                }
                            </td>
                            <td>
                                {
                                    facilitiesList?.filter(
                                        (facility) => facility.id == contract.facilities
                                    )[0]?.name
                                }
                            </td>
                            <td>{contract.startDate}</td>
                            <td>{contract.endDate}</td>
                            <td>{contract.deposit}</td>
                            <td>{contract.totalMoney}</td>
                            <th>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() =>
                                        getContractInfo(
                                            contract.id,
                                            contract.name,
                                        )
                                    }
                                >
                                    <i className="fas fa-trash-alt">Xóa</i>
                                </button>
                            </th>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <ModalDeleteContract
                id={deletedId}
                name={deletedName}
                getList={() => {
                    getContractList();
                }}
            />
            <Footer/>
        </>)
}

export default ContractList;