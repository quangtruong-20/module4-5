import Header from "../header/Header";
import Footer from "../footer/Footer";

function FacilityEdit() {
    return (
        <div>
            <Header/>
            <h1 style={{textAlign: 'center', color: '#0dcaf0'}}>Sửa dịch vụ</h1>
            <div className="row">
                <div className="col-md-4">
                    <button className="btn btn-outline-primary">Danh sách</button>
                </div>
                <div className="col-md-8">
                    <div style={{textAlign: 'center', justifyContent: 'center'}}>
                        <form>
                            <div className="col-md-6">
                                <label>Facility Type:</label>
                                <label className="form-label">
                                    <select className="form-select">
                                        <option>Vui lòng chọn kiểu dịch vụ</option>

                                    </select>
                                </label>

                            </div>
                            <div className="col-md-6" style={{textAlign: 'center'}}>
                                <label className="form-label" htmlFor="name">Name:</label>
                                <input className="form-control" type="text" id="name"/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="area">Area:</label>
                                <input className="form-control" type="text" id="area"/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="image">Img:</label>
                                <input className="form-control" type="text" id="image"
                                       placeholder="dán link ảnh bạn muốn"/>

                            </div>
                            <div className="col-md-6">
                                <label htmlFor="cost">Cost:</label>
                                <input className="form-control" type="text" id="cost"/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="maxPeople">Max People:</label>
                                <input className="form-control" type="number" id="maxPeople"/>

                            </div>
                            <div className="col-md-6">
                                <label htmlFor="standardRoom">standardRoom:</label>
                                <input className="form-control" type="number" id="standardRoom"/>

                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Rent Type:</label>
                                <label>
                                    <select className="form-select">
                                        <option>Vui lòng chọn kiểu thuê</option>
                                    </select>
                                </label>

                            </div>
                            <p className="col-md-6">
                                <label className="form-label"
                                       htmlFor="descriptionOfOtherConvenience">Description:</label>
                                <input className="form-control" type="text" id="descriptionOfOtherConvenience"
                                />
                            </p>
                            <div className="col-md-6"
                            >
                                <label className="form-label" htmlFor="poolArea">Area of pool:</label>
                                <input
                                    className="form-control" type="number" id="poolArea"/>

                            </div>
                            <div className="col-md-6"
                            >
                                <label className="form-label" htmlFor="numberOfFloors">Number of Floors:</label>
                                <input className="form-control" type="number"
                                       id="numberOfFloors"/>

                            </div>
                            <div>
                                <p className="col-md-6">
                                    <label className="form-label" htmlFor="attachFacility">Attach Facility:</label>
                                    <input className="form-control" type="text" id="attachFacility"/>
                                </p>
                            </div>
                            <button style={{textAlign: 'left'}} className="btn btn-info" type="submit">Tạo mới</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>)
}

export default FacilityEdit;