/* eslint-disable no-unused-vars */
import React from 'react';

const BarEntities = ({ bar}) => {
    const histograme = {
        width: "100%",
        height: +bar.amount + '%',
        background: "hsl(10, 79%, 65%)",
    }

    return (
        <div className="barContainer">
            <div className="histogrameConatiner">
                <div className="total">
                    <small>${bar.amount}</small>
                </div>
                <div className="histograme" style={histograme}></div>
            </div>
            <div className="days">
                <small>{bar.day}</small>
            </div>
        </div>
    );
};

export default BarEntities;