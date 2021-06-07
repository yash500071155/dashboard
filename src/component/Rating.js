import React from 'react';
import Percent from "./Percent";

const Rating = () => {
    return (
        <div className="rating-container">
            <Percent
                heading="Attendance" percentage="90%" caption="Last Absence 2th May, 12:00P.M"
            />
            <Percent
                heading="Tests" percentage="90%" caption="Last Test 100%"
            />
            <div className="percent rating">
                <p className="heading">HW Rating</p>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <p className="rating-num">(4.1)</p>
                <p className="caption">Last home work 4.5</p>
            </div>
        </div>
    )

}
export default Rating;