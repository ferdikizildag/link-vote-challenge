import React from 'react';
import './style.scss';

const LinkItem = ({ point, title, link, removeClick }) => {

    const deleteIconClick = () => {
        removeClick(true);
    }

    return (
        <div className='linkFrame'>
            <div className='pointContainer'>
                <span className='point'>{point}</span>
                <span className='pointText'>POINTS</span>
            </div>
            <div className='detail'>
                <div className='description'>
                    <span className='title'>{title}</span>
                    <span className='subTitle'>{link}</span>
                </div>
                <div className='voteDetail'>
                    <span className='upVote'>
                        <span className="oi oi-arrow-top" />
                        <span>Up Vote</span>
                    </span>
                    <span className='downVote'>
                        <span className="oi oi-arrow-bottom" />
                        <span>Down Vote</span>
                    </span>
                </div>
            </div>
            <div className='deleteIcon' onClick={deleteIconClick}>
                <span className="oi oi-minus" />
            </div>
        </div>
    )
}

export default LinkItem;