import React from 'react';
import { PropTypes } from 'prop-types';
import style from './style.module.scss';
import { VoteTypeEnum } from 'utils/enum';

const LinkItem = ({ item, removeClick, updateVote }) => {

    const deleteIconClick = () => {
        removeClick(true, item);
    }

    const voteClick = (type) => () => {
        updateVote(type, item);
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
                    <span className={style.upVote} onClick={voteClick(VoteTypeEnum.UP)}>
                        <span className="oi oi-arrow-top" />
                        <span>Up Vote</span>
                    </span>
                    <span className={style.downVote} onClick={voteClick(VoteTypeEnum.DOWN)}>
                        <span className="oi oi-arrow-bottom" />
                        <span>Down Vote</span>
                    </span>
                </div>
            </div>
            <div className={style.deleteIcon} onClick={deleteIconClick}>
                <span className="oi oi-minus" />
            </div>
        </div>
    )
}

LinkItem.defaultProps = {
    item: {}
};

LinkItem.propTypes = {
    item: PropTypes.object,
    removeClick: PropTypes.func.isRequired,
    updateVote: PropTypes.func.isRequired
};

export default LinkItem;