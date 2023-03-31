import Header from "../header/Header";
import Footer from "../footer/Footer";
import "bootstrap/dist/css/bootstrap.css"
function Home() {
    return(
        <div>
        <Header></Header>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" style={{marginBottom: '34px'}}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://furamavietnam.com/wp-content/uploads/2018/07/Vietnam_Danang_Furama_Resort_Exterior-Furama-girl-with-pink-hat.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://hongngocha.com/wp-content/uploads/2019/05/Vietnam_Danang_Furama_Resort.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://danangfantasticity.com/wp-content/uploads/2021/02/Furama-resort-danang-103-105-vo-nguyen-giap-da-nang-ocean-view.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <div className="card-img-overlay">
                    <div className="row mt-5">
                        <div className="col-lg-6 mt-5 d-flex">

                            <div className="col-12">
                            <p>
                            <h2 style={{color: '#fff', lineHeight: '34px',marginTop: '152px'}}><strong>KHU NGHỈ DƯỠNG ẨM THỰC </strong><br />
                                <strong>TỌA LẠC TẠI BÃI BIỂN ĐÀ NẴNG </strong><br />
                                <strong>MỘT TRONG 6 BÃI BIỂN ĐẸP NHẤT THẾ GIỚI<br />
                                </strong></h2>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row mt-5">
                            <div className="col-lg-12 d-flex justify-content-end">
                                <div className="btn-group dropstart w-25 h-100">
                                    <button type="button" style={{backgroundColor: '4, 96, 86, 0.9'}} className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                        </svg>
                                        <p className="mt-3">Hỗ trợ</p>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">0934774152</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-12 d-flex justify-content-end">
                                <div className="btn-group dropstart w-25 h-100">
                                    <button type="button" style={{backgroundColor: '4, 96, 86, 0.9'}} className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-file-earmark-image" viewBox="0 0 16 16">
                                            <path d="M6.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                            <path d="M14 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5V14zM4 1a1 1 0 0 0-1 1v10l2.224-2.224a.5.5 0 0 1 .61-.075L8 11l2.157-3.02a.5.5 0 0 1 .76-.063L13 10V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4z"/>
                                        </svg>
                                        <p className="mt-3">Hình ảnh</p>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-12 d-flex justify-content-end">
                                <div className="btn-group dropstart w-25 h-100">
                                    <button type="button" style= {{backgroundColor: '4, 96, 86, 0.9'}} className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                        </svg>
                                        <p className="mt-3">Tham quan</p>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <div className="container">
        <div className="content">
            <div className="row">
                <div className="col-4" style={{paddingTop: '17px'}}>
                    <h2 style={{fontSize: '24px',color: '#cbbe73',lineHeight: '36px',textAlign: 'left',fontFamily:'Playfair Display',fontWeight:'700',fontStyle:'normal'}}>KHU NGHỈ DƯỠNG ĐẲNG CẤP THẾ GIỚI, FURAMA ĐÀ NẴNG, NỔI TIẾNG LÀ KHU NGHỈ DƯỠNG ẨM THỰC TẠI VIỆT NAM.</h2>
                </div>

                <div className="col-4">
                    <iframe width="370" height="278.98"
                            src="https://www.youtube.com/embed/Pa8tN0u0Rr0">
                    </iframe>
                </div>
                <div className="col-4" style={{marginTop: '19px' , color: '#212121',fontWeight: '300',fontSize: '14px',fontFamily:'Open Sans, sans-serif',
                    lineHeight: '22px', paddingLeft: '18px'}}>
                    <p>Hướng ra bãi biển Đà Nẵng trải dài cát trắng, Furama Resort Đà Nẵng là cửa ngõ đến với 3 di sản văn hoá thế giới: Hội An (20 phút), Mỹ Sơn (90 phút) và Huế (2 tiếng. 196 phòng hạng sang cùng với 70 căn biệt thự từ hai đến bốn phòng ngủ có hồ bơi riêng đều được trang trí trang nhã, theo phong cách thiết kế truyền thống của Việt Nam và kiến trúc thuộc địa của Pháp, biến Furama thành khu nghỉ dưỡng danh giá nhất tại Việt Nam – vinh dự được đón tiếp nhiều người nổi tiếng, giới hoàng gia, chính khách, ngôi sao điện ảnh và các nhà lãnh đạo kinh doanh quốc tế.</p>
                </div>
            </div>
        </div>
    </div>

        <Footer></Footer>

        </div>
    )
}

export default Home;