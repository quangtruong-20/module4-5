import Header from "../header/Header";
import Footer from "../footer/Footer";
import contractList from "./Contract";


function ContractList() {
    return(
        <>
            <Header/>.
        <div className="p-3">
        <h2 className="text-center fw-bold my-3">DANH SÁCH HỢP ĐỒNG</h2>

        <nav className="navbar navbar-expand-lg py-0 my-2">
            <div className="container-fluid">
                <button className="btn btn-primary btn-outline-secondary btn-sm" data-bs-toggle="modal"
                        data-bs-target="#addContract">
                    <span className="fa-solid fa-plus text-light h6 my-auto me-1"></span>
                    <span className="text-light"> Thêm mới hợp đồng</span>
                </button>
            </div>
        </nav>

        <table className="table table-bordered">
            <thead>

            <tr>
                <th className="text-center">#</th>
                <th>Số hợp đồng</th>
                <th>Ngày bắt đầu</th>
                <th>Ngày kết thúc</th>
                <th>Tiền đặt cọc</th>
                <th>Tổng tiền</th>
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
                </tr>
            ))}
            </tbody>
        </table>

    </div>
            <Footer/>

        </>)
}

export default ContractList;