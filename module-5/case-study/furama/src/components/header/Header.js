import "bootstrap/dist/css/bootstrap.css"
function Header() {
    return(
        <div>
        <header>
        <div className="container-fluid">
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light " id="header-nav">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/#"><img
                            src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png" alt=""
                            style={{height: 60}}/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                                >
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="/#">GIỚI
                                        THIỆU</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="/#">LOẠI
                                        PHÒNG</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="/#">ẨM THỰC</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="/#">HỘI
                                        NGHỊ VÀ SỰ KIỆN</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page"
                                       href="/#">SPA</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="/#">GIẢI
                                        TRÍ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="/#">ĐIỂM
                                        ĐẾN</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="/#">ƯU
                                        ĐÃI</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
        </div>)}

export default Header;