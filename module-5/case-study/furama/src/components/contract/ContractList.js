import Header from "../header/Header";
import Footer from "../footer/Footer";

    const contractList = [
        {
            contractCode: "HD-1",
            startDate: "2020-12-08",
            endDate: "2020-13-08",
            deposit: "2000000",
            totalMoney: "40000000",
        },
        {
            contractCode: "HD-2",
            startDate: "2021-12-08",
            endDate: "2021-13-08",
            deposit: "1500000",
            totalMoney: "30000000",
        },
    ];
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