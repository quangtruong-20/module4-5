function ContractList() {
    return(
        <>
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
            <tr>
                <th className="text-center">#</th>
                <th>Tên dịch vụ</th>
                <th>Ngày bắt đầu</th>
                <th>Ngày kết thúc</th>
                <th>Tiền đặt cọc</th>
                <th>Tổng tiền</th>
                <th className="text-center">Các dịch vụ đi kèm</th>
            </tr>
        </table>

    </div>

    <div className="modal fade" id="addContractdetail" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <form className="border border-2 border-success p-3 rounded formCSS">
                    <div className="modal-header">
                        <h3 className="modal-title fw-bold text-primary" id="exampleModalLabel4">THÊM DỊCH VỤ ĐI KÈM</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        <div className="form-group">
                            <input type="hidden" name="contractId" id="contractId"/>

                            <div className="form-group">
                                <label className="h6" for="attachFacility">Tên dịch vụ đi kèm:</label>
                                <div className="input-group">
                                    <select id="attachFacility" className="form-select">
                                        <option></option>
                                    </select>
                                    <span className="input-group-text"><i className="fa-solid fa-file-signature"></i></span>
                                </div>
                            </div>

                            <div className="mt-3 form-group">
                                <label for="quantity" className="h6">Số lượng:</label>
                                <div className="input-group">
                                    <input type="text" id="quantity" className="form-control"
                                           placeholder="Nhập số lượng..."/>
                                    <span className="input-group-text">#</span>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                            <button type="submit" className="btn btn-success">Lưu</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
        </>)
}

export default ContractList;