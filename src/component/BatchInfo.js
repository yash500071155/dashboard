import React from 'react';
import userimg from "./images/user-img.jpg"
import pluslogo from "./images/plus-logo.png"
import timelogo from "./images/time-logo.jpg"

const BatchInfo = () => {
    return (
        <div className="batch-info-container">

            <p className="batch-name">Btach Name | PHY_B1</p>
            <div className="first-line">
                <p className="name">
                    <img className="user-img" src={userimg} alt="user-img" />
                Yash Jangid
                <img className="plus-logo" src={pluslogo} alt="plus-logo" />
                </p>
                <div>
                    <p>
                        <img className="user-img" src={userimg} alt="user-img" />
            125 students
            </p>
                </div>
                <div className="third-line">
                    <img className="time-logo" src={timelogo} alt="timelogo" />
                <p className="activity">Upcoming Activity Thu,25th May <strong> 12:00PM -12:00 PM</strong></p>
                <button className="view">View</button>
                </div>
            </div>
        </div>
    )

}
export default BatchInfo;