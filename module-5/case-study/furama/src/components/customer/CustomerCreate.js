 function CustomerCreate() {
    return(<div id="container">

        <h1 style={{marginLeft: '40%', marginTop: '50px'}}>Tạo mới khách hàng</h1>

        <form className="form" style={{textAlign: 'center'}}>
            <div style={{marginRight: '500px', marginLeft: '500px', color: 'white'}}>
                <div>
                    <label className="form-label animationTop delay-03">Customer Name:</label>
                    <input className="form-control animationTop delay-04" type="text" placeholder="Customer Name"
                    />
                </div>

                <div>
                    <label className="form-label animationTop delay-05"> Day Of Birth :</label>
                    <input className="form-control animationTop delay-06" type="date" placeholder="Date Of Birth"
                    />
                    <div>
                        <label className="form-label animationTop delay-07">Gender :</label>
                        <select style={{fontSize: '15px', textAlign: 'center'}} className="animationTop delay-08">
                            <option value="">Gender:</option>
                            <option value="1">Male</option>
                            <option value="0">Female</option>
                            <option value="2">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="form-label animationTop delay-08">ID Card :</label>

                        <input className="form-control animationTop delay-09" type="text" placeholder="ID Card"/>
                    </div>

                    <div>
                        <label className="form-label animationTop delay-11">Phone Number :</label>

                        <input className="form-control animationTop delay-12" type="text" placeholder="Phone Number"
                        />
                    </div>

                    <div>
                        <label className="form-label animationTop delay-13">Email :</label>

                        <input className="form-control animationTop delay-14" type="text" placeholder="Email"/>
                    </div>

                    <div>
                        <label className="form-label animationTop delay-15">Address :</label>

                        <input className="form-control animationTop delay-16" type="text" placeholder="Address"/>
                    </div>

                    <div>
                        <label className="form-label animationTop delay-17">Customer Type :</label>
                        <select style={{fontSize: '15px'}} className="animationTop delay-18">
                            <option value="">Customer type :</option>
                        </select>
                    </div>

                </div>
                <div style={{textAlign: 'center'}}>
                    <input type="submit" value="Save" className="m-3 btn btn-info animationTop delay-19"/>
                    </div>
            </div>
        </form>
    </div>)
}

export default CustomerCreate;