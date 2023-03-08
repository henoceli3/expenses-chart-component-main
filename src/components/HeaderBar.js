import React from 'react';

const HeaderBar = () => {
    return (
        <div className='header'>
            <div className="headerTitle">
                <small>My balance</small>
                <h2>$931</h2>
            </div>
            <div className="headerLogo">
                <img src="./logo.svg" alt="logo" />
            </div>
        </div>
    );
};

export default HeaderBar;