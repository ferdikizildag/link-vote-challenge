import React from 'react';
import './style.scss';

const Pagination = () => {
    return (
        <div className="pgFrame">
            <div className="leftArrow" onClick={()=>console.log('prev')}>{`<`}</div>
            <div className="number">1</div>
            <div className="number">1</div>
            <div className="number selected">1</div>
            <div className="number">1</div>
            <div className="rightArrow" onClick={()=>console.log('next')}>{`>`}</div>
        </div>
    )
}

export default Pagination