function CustomerList() {
    return (
        <div className="p-3">
            <h2 className="text-center fw-bold my-3">DANH SÁCH KHÁCH HÀNG</h2>

            <table className="table table-bordered">
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

            </table>
        </div>


    )
}

export default CustomerList;