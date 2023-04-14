export default function Header() {
    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg navbar-light " id="header-nav">
                            <div className="container-fluid">
                                <a className="navbar-brand text-white">Thi</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarScroll" aria-controls="navbarScroll"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarScroll">
                                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                                        style={{height: "100px", textAlign: "center"}}>
                                        <li className="nav-item">
                                            <a className="nav-link active text-white" aria-current="page">THÊM MỚI</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active text-white" aria-current="page">LOẠI
                                                PHÒNG</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active text-white" aria-current="page">ẨM THỰC</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active text-white" aria-current="page">HỘI
                                                NGHỊ VÀ
                                                SỰ KIỆN</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active text-white" aria-current="page"
                                            >SPA</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active text-white" aria-current="page">GIẢI
                                                TRÍ</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active text-white" aria-current="page">ĐIỂM
                                                ĐẾN</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}