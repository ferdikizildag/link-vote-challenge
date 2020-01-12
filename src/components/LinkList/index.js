import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import style from './style.module.scss';
import { VoteOrderEnum } from 'utils/enum';
import LinkItem from 'components/LinkItem';
import Pagination from 'components/Pagination';
import CustomModal from 'components/CustomModal';
import { toastr } from 'react-redux-toastr';


const LinkList = ({ data, deleteLink, updateVote }) => {
    const [visibility, setModaVisibility] = useState(false);
    const [orderByType, setOrderByType] = useState('false');
    const [activePage, setActivePage] = useState(0);
    const [modalData, setModalData] = useState({});
    const pageSize = 5;
    const totalSize = Math.floor((data.length - 1) / pageSize);

    const hideModal = () => {
        setModaVisibility(false)
    }

    const removeLink = () => {
        deleteLink(modalData)
        setModaVisibility(false)
        setModalData({})
        toastr.success('', modalData.name + ' Removed');
    }

    const showModal = (visibility, item) => {
        setModaVisibility(visibility)
        setModalData(item)
    }

    const orderBySelect = (e) => {
        setOrderByType(e.target.value)
        setActivePage(0)
    }

    const sortByMostVoted = (x, y) => {
        const value = y.point - x.point;
        if (value === 0) {
            return sortByUpdatedAt(x, y);
        }
        return value;
    };

    const sortByLessVoted = (x, y) => {
        const value = x.point - y.point;
        if (value === 0) {
            return sortByUpdatedAt(x, y);
        }
        return value;
    };

    const sortByUpdatedAt = (x, y) => {
        return new Date(y.updatedAt).getTime() - new Date(x.updatedAt).getTime();
    };

    const sortByCreatedAt = (x, y) => {
        return new Date(y.createdAt).getTime() - new Date(x.createdAt).getTime();
    };

    const renderLinkItem = () => {
        if (data && data.length > 0) {
            let pageData = [];
            switch (orderByType) {
                case VoteOrderEnum.LESS_VOTED:
                    pageData = data.sort(sortByLessVoted);
                    break;
                case VoteOrderEnum.MOST_VOTED:
                    pageData = data.sort(sortByMostVoted);
                    break;
                default:
                    pageData = data.sort(sortByCreatedAt);
                    break;
            }

            pageData = pageData.slice(pageSize * activePage, pageSize * (activePage + 1));

            if (pageData.length === 0) {
                pageData = data.slice(pageSize * (activePage - 1), pageSize * activePage);
                setActivePage(activePage - 1);
            }
            return pageData.map((link, key) => (
                <LinkItem
                    key={key}
                    item={link}
                    removeClick={showModal}
                    updateVote={updateVote}
                />
            ));
        } else {
            return '';
        }
    };

    return (
        <div>
            <select className={style.orderSelect} onChange={orderBySelect}>
                <option value="">Order by</option>
                <option value={VoteOrderEnum.MOST_VOTED}>Most Voted (Z->A)</option>
                <option value={VoteOrderEnum.LESS_VOTED}>Less Voted (A->Z)</option>
            </select>
            {renderLinkItem()}
            {totalSize >= 1 && (
                <Pagination currentPage={activePage} totalSize={totalSize} setActivePage={setActivePage} />
            )}
            <CustomModal
                question='Do you want to remove:'
                header='Remove Link'
                data={modalData}
                onClickOk={removeLink}
                onClickCancel={hideModal}
                visibility={visibility}
            />
        </div>
    )
}


LinkList.defaultProps = {
    data: []
};

LinkList.propTypes = {
    data: PropTypes.array,
    deleteLink: PropTypes.func,
    updateVote: PropTypes.func
};

export default LinkList;