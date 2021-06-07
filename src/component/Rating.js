import React from 'react';
import Percent from "./Percent";

const Rating = () => {
    return (
        <div className="rating-container">
            <Percent
                heading="Attendance" percentage="90%" caption="Last Absence 2th May, 12:00P.M"
            />


        </div>
    )

}
export default Rating;