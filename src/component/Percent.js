import React from 'react';

const Percent = (props) => {
    return (
        <div className="percent attendance">
            <p className="text">{props.heading}</p>
            <div className="circle">
                <p className="text-percent">{props.percentage}</p>
            </div>
            <p className="text">{props.caption}</p>
        </div>
    )

}
export default Percent;