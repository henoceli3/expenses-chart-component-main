import React from 'react';
import data from '../data.json'
import BarEntities from './BarEntities';

const ComposantCorps = () => {
    return (
        <div className='composantCorps'>
            <div className="composantCorpsContainer">
                <h2 className='spending'>Spending - Last 7 days</h2>
                <div className="graphe">
                    {
                        data
                            .map((bar, key) => (
                                <BarEntities key={key} bar={bar} />
                            ))
                    }
                </div>
                <div className="line"></div>
                <div className="counts">
                    <div className="countContainer">
                        <div className="part partOneOfCount">
                            <p>Total this month</p>
                            <h1>${478.33}</h1>
                        </div>
                        <div className="part partTwoOfCount">
                            <p>+2.4%</p>
                            <small>from last month</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComposantCorps;