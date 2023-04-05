import Header from "../header/Header";
import Footer from "../footer/Footer";
import contractList from "./Contract";
import {NavLink} from "react-router-dom";


function ContractList() {
    return(
        <>
            <Header/>.
        <div className="p-3">
        <h2 className="text-center fw-bold my-3">DANH SÁCH HỢP ĐỒNG</h2>



                <NavLink to={'/create-contract'}>
                <button className="btn btn-primary btn-outline-secondary btn-sm" >
                    <span className="text-light"> Thêm mới hợp đồng</span>
                </button>
                </NavLink>

        <table className="table table-bordered">
            <thead>

            <tr>
                <th className="text-center">#</th>
                <th>Số hợp đồng</th>
                <th>Ngày bắt đầu</th>
                <th>Ngày kết thúc</th>
                <th>Tiền đặt cọc</th>
                <th>Tổng tiền</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {contractList.map((contract, index) => (
                <tr key = {index}>
                    <th scope="row">{++index}</th>
                    <td>{contract.contractCode}</td>
                    <td>{contract.startDate}</td>
                    <td>{contract.endDate}</td>
                    <td>{contract.deposit}</td>
                    <td>{contract.totalMoney}</td>

                    <th>
                        <button
                            type="button"
                            className="btn btn-danger"
                            data-toggle="modal"
                            data-target="#exampleModal"
                        >
                            <i className="fas fa-trash-alt">Xóa</i>
                        </button>
                    </th>
                </tr>
            ))}
            </tbody>
        </table>

    </div>
            <Footer/>

        </>)
}

export default ContractList;