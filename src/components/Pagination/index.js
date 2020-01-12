import React from 'react';
import style from './style.module.scss';

const Pagination = () => {
    return (
        <div className={style.pgFrame}>
            <div className={style.leftArrow} onClick={()=>console.log('prev')}>{`<`}</div>
            <div className={style.number}>1</div>
            <div className={style.number}>1</div>
            <div className={`${style.number} ${style.selected}`}>1</div>
            <div className={style.number}>1</div>
            <div className={style.rightArrow} onClick={()=>console.log('next')}>{`>`}</div>
        </div>
    )
}

export default Pagination