import Header from "../header/Header";
import Footer from "../footer/Footer";

function ContractCreate() {
    return(
        <>
            <Header/>
        <div className="card-header">
            <strong id="inDam"><h1 className="card-title" style={{color: 'red',textAlign:"center"}}>Tạo mới hợp đồng</h1></strong>
        </div>
    <form>
        <div className="card-body">
            <div style={{textAlign: 'center', marginLeft: '449px', width: '93%'}}>
                <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                    <label className="form-label" htmlFor="facility">Tên hợp đồng</label>
                    <input style={{width: '100%', height:' 70%'}}  id="facility">
                    </input>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                    <label className="form-label" htmlFor="name_customer">Tên khách hàng</label>
                    <input style={{width: '100%', height:' 70%'}}  id="name_customer"/>
                </div>

                <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                    <label className="form-label" htmlFor="dayStart">Ngày bắt đầu:</label>
                    <input type="date" className="form-control time-mask" placeholder="?" id="dayStart"/>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                    <label className="form-label" htmlFor="endDateForm">Ngày kết thúc:</label>
                    <input type="text" className="form-control numeral-mask"
                           id="endDateForm"/>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                    <label className="form-label" htmlFor="deposit">Tiền đặt cọc (VNĐ):</label>
                    <input type="number" className="form-control block-mask" placeholder="giá" id="deposit"/>
                </div>
            </div>
            <div className="col-12" style={{marginLeft:'588px'}}>
                <button type="reset" className="btn btn-primary me-1 waves-effect waves-float waves-light">Lưu
                </button>
                <button type="reset" className="btn btn-outline-secondary waves-effect">Xóa</button>
            </div>
        </div>
    </form>

            <Footer/>
        </>  )
}

export default ContractCreate;