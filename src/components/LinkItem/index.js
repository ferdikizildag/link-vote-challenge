import React from 'react';
import style from './style.module.scss';

const LinkItem = ({ item, removeClick }) => {

    const deleteIconClick = (item) => () => {
        removeClick(true, item);
    }

    return (
        <div className={style.linkFrame}>
            <div className={style.pointContainer}>
                <span className={style.point}>{item.point}</span>
                <span className={style.pointText}>POINTS</span>
            </div>
            <div className={style.detail}>
                <div className={style.description}>
                    <span className={style.title}>{item.name}</span>
                    <span className={style.subTitle}>{item.link}</span>
                </div>
                <div className={style.voteDetail}>
                    <span className={style.upVote}>
                        <span className="oi oi-arrow-top" />
                        <span>Up Vote</span>
                    </span>
                    <span className={style.downVote}>
                        <span className="oi oi-arrow-bottom" />
                        <span>Down Vote</span>
                    </span>
                </div>
            </div>
            <div className={style.deleteIcon} onClick={deleteIconClick(item)}>
                <span className="oi oi-minus" />
            </div>
        </div>
    )
}

export default LinkItem;