import React, { useState } from 'react';
import style from './style.module.scss';
import { VoteOrderEnum } from 'utils/enum';
import LinkItem from 'components/LinkItem';
import Pagination from 'components/Pagination';
import CustomModal from 'components/CustomModal';

const LinkList = ({ data, deleteLink, updateVote }) => {
    const [visibility, setModaVisibility] = useState(false);
    const [modalData, setModalData] = useState({});

    const hideModal = () => {
        setModaVisibility(false)
    }

    const removeLink = () => {
        deleteLink(modalData)
        setModaVisibility(false)
        setModalData({})
    }

    const showModal=(visibility,item)=>{
        setModaVisibility(visibility)
        setModalData(item)
    }

    return (
        <div>
            <select className={style.orderSelect} onChange={(e) => console.log(e.target.value)}>
                <option value="">Order by</option>
                <option value={VoteOrderEnum.MOST_VOTED}>Most Voted (Z->A)</option>
                <option value={VoteOrderEnum.LESS_VOTED}>Less Voted (A->Z)</option>
            </select>
            {
                data.map((item, key) => (
                    <LinkItem
                        key={key}
                        item={item}
                        removeClick={showModal}
                        updateVote={updateVote}
                    />
                ))
            }
            <Pagination />
            <CustomModal
                data={modalData}
                onClickOk={removeLink}
                onClickCancel={hideModal}
                visibility={visibility}
            />
        </div>
    )
}

export default LinkList;