import React from 'react';
import { PropTypes } from 'prop-types';
import style from './style.module.scss';

const Pagination = ({ totalSize, currentPage, setActivePage }) => {
    const onClickPage = (i) => () => {
        setActivePage(i)
    }
    const onClickPrev = ()=> {
        const prevPage = currentPage - 1;
        if (prevPage >= 0) setActivePage(prevPage);
    };
    const onClickNext = () => {
        if (totalSize !== currentPage) {
            setActivePage(currentPage + 1);
        }
    };
    const renderNumber = () => {
        const numberArray = [];
        for (let i = 0; i <= totalSize; i++) {
            numberArray.push(i);
        }
        return numberArray.map((i) => {
            return (
                <div
                    key={i}
                    className={`${style.number} ${i === currentPage ? style.selected : ''}`}
                    onClick={onClickPage(i)}
                >{i + 1}</div>
            );
        });
    }
    return (
        <div className={style.pgFrame}>
            <div className={style.leftArrow} onClick={onClickPrev}>{`<`}</div>
            {renderNumber()}
            <div className={style.rightArrow} onClick={onClickNext}>{`>`}</div>
        </div>
    )
}

Pagination.propTypes = {
    totalSize: PropTypes.number,
    currentPage: PropTypes.number,
    setActivePage: PropTypes.func
};

export default Pagination