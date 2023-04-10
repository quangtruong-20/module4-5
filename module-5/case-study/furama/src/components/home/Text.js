export default function Text() {
    return(
        <>
            <div className="text-center pt-5">
                <h2>Meeting Room Booking Form</h2>
            </div>

            <div className="card container bg-transparent">
                <div className="card-body">
                    <form id="bookingForm" action="#" method="" className="needs-validation" noValidate
                          autoComplete="off">
                        <div className="form-group">
                            <label htmlFor="inputName">Name</label>
                            <input type="text" className="form-control" id="inputName" name="name"
                                   placeholder="Your name" required/>
                            <small className="form-text text-muted">Please fill your name</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputEmail">Email</label>
                            <input type="email" className="form-control" id="inputEmail" name="email"
                                   placeholder="Enter email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
                            <small className="form-text text-muted">We'll never share your email with anyone
                                else.</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputPhone">Phone</label>
                            <input type="tel" className="form-control" id="inputPhone" name="phone"
                                   placeholder="099xxxxxxx" pattern="\d{3}\d{3}\d{4}" required/>
                            <small className="form-text text-muted">We'll never share your phone number with anyone
                                else.</small>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="inputDate">Date</label>
                                <input type="date" className="form-control" id="inputDate" name="date" required/>
                                <small className="form-text text-muted">Please choose date and time for meeting.</small>
                            </div>

                            <div className="form-group col-md-4">
                                <label>Start Time</label>
                                <div className="d-flex flex-row justify-content-between align-items-center">
                                    <select className="form-control mr-1" id="inputStartTimeHour" name="startHour"
                                            required>
                                        <option value="" disabled selected>Hour</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                    </select>
                                    <div className="pl-1 pr-2">:</div>
                                    <select className="form-control" id="inputStartTimeMinute" name="startMinute"
                                            required>
                                        <option value="" disabled selected>Min</option>
                                        <option value="00">00</option>
                                        <option value="00">30</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group col-md-4">
                                <label>End Time</label>
                                <div className="d-flex flex-row justify-content-between align-items-center">
                                    <select className="form-control mr-1" id="inputEndTimeHour" name="endHour" required>
                                        <option value="" disabled selected>Hour</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                    </select>
                                    <div className="pl-1 pr-2">:</div>
                                    <select className="form-control" id="inputEndTimeMinute" name="endMinute" required>
                                        <option value="" disabled selected>Min</option>
                                        <option value="00">00</option>
                                        <option value="00">30</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <legend className="col-form-label pt-0">Choose a Room</legend>
                            <div className="form-check form-check-inline">
                                <input type="radio" className="form-check-input" id="inlineRadioType1" name="roomType"
                                       value="type1" required/>
                                <label className="form-check-label" htmlFor="inlineRadioType1">Room 1 (10
                                    People)</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="radio" className="form-check-input" id="inlineRadioType2" name="roomType"
                                       value="type2" required/>
                                <label className="form-check-label" htmlFor="inlineRadioType2">Room 2 (20
                                    People)</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="radio" className="form-check-input" id="inlineRadioType3" name="roomType"
                                       value="type3" required/>
                                <label className="form-check-label" htmlFor="inlineRadioType3">Room 3 (30
                                    People)</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="radio" className="form-check-input" id="inlineRadioType4" name="roomType"
                                       value="type4" required/>
                                <label className="form-check-label" htmlFor="inlineRadioType4">Room 4 (40
                                    People)</label>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-block col-lg-2" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}