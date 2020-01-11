import React, { useState } from 'react';
import './style.scss';
import { VoteEnum } from 'utils/enum';
import LinkItem from 'components/LinkItem';
import Pagination from 'components/Pagination';
import CustomModal from 'components/CustomModal';

const LinkList = () => {
    const [visibility, setModaVisibility] = useState(false);

    const hideModal = () => {
        setModaVisibility(false)
    }

    const removeLink= ()=>{
        //TODO: Datayı silme fonksiyonu yazılacak
        setModaVisibility(false)
    }

    return (
        <div>
            <select className='orderSelect' onChange={(e) => console.log(e.target.value)}>
                <option value="">Order by</option>
                <option value={VoteEnum.MOST_VOTED}>Most Voted (Z->A)</option>
                <option value={VoteEnum.LESS_VOTED}>Less Voted (A->Z)</option>
            </select>
            <LinkItem
                point='6'
                title='Hacker News'
                link='link'
                removeClick={setModaVisibility}
            />
            <LinkItem
                point='6'
                title='Hacker News'
                link='link'
                removeClick={setModaVisibility}
            />
            <Pagination />
            <CustomModal
                onClickOk={removeLink}
                onClickCancel={hideModal}
                visibility={visibility}
            />
        </div>
    )
}

export default LinkList;