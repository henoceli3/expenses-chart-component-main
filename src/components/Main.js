import React from 'react';
import HeaderBar from './HeaderBar';
import ComposantCorps from './ComposantCorps';

const Main = () => {
    return (
        <div className='main'>
            <div className="mainContainer">
                <HeaderBar />
                <ComposantCorps />
            </div>
        </div>
    );
};

export default Main;