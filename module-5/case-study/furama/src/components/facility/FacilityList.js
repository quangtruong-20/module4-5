import Header from "../header/Header";
import Footer from "../footer/Footer";
import facilityList from "./Facility";


function FacilityList() {
    return (

        <div>
            <Header/>
            <div >
                <div className="heading-img">
                    <img style={{width : '100%'}} src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433"/>
                    <h2 style={{fontSize: '40px', color: '#ffffff', textAlign: 'center', fontFamily: 'Playfair Display', fontWeight: 700, fontStyle: 'normal',position: 'relative',
                        top: '-166px'}}>LOẠI PHÒNG</h2>
                </div>

                <div className="container">

                    {/*them moi*/}
                    <div className="element-button mb-5">
                        <a
                            className="btn btn-add btn-sm bg-success text-white"
                            href="add-form-facilities.html"
                        >
                            <i className="fas fa-plus"></i>
                            Tạo mới dịch vụ
                        </a>
                    </div>
                    {/*card*/}
                    <div className="row">
                        {facilityList.map((facility, index) => (
                            <div className="col-4" key={index}>
                                <div className="card">
                                    <img
                                        src={facility.img}
                                        className="card-img-top"
                                        alt="..."
                                        width="370"
                                        height="239"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{facility.name}</h5>
                                        <p className="card-text">{facility.area}</p>
                                        <button
                                            type="button"
                                            className="btn btn-danger btn-sm"
                                            data-toggle="modal"
                                            data-target="#exampleModal"
                                            style={{marginLeft: '104px', marginRight: '14px'}}
                                        >
                                            <i className="fas fa-trash-alt">Xóa</i>
                                        </button>
                                        <button
                                            className="btn btn-primary btn-sm"
                                            href="edit-form-facilities.html"
                                        >
                                            <i className="fas fa-edit">Sửa</i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-5">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        <i className="ti-angle-left"></i>
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        1
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        2
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        3
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        <i className="ti-angle-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default FacilityList;