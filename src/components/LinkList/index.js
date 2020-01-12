import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import style from './style.module.scss';
import { VoteOrderEnum } from 'utils/enum';
import LinkItem from 'components/LinkItem';
import Pagination from 'components/Pagination';
import CustomModal from 'components/CustomModal';
import { toastr } from 'react-redux-toastr';
const pageSize = 5;

class LinkList extends Component {
    state = {
        visibility: false,
        orderByType: '',
        activePage: 0,
        modalData: {}
    }

    setModalVisibility = (value) => {
        this.setState({ visibility: value })
    }

    setModalData = (link) => {
        this.setState({ modalData: link })
    }

    setActivePage = (page) => {
        this.setState({ activePage: page })
    }

    setOrderByType = (type) => {
        this.setState({ orderByType: type })
    }

    hideModal = () => {
        this.setModalVisibility(false)
    }

    removeLink = () => {
        const { deleteLink } = this.props;
        const { modalData } = this.state;
        deleteLink(modalData)
        this.setModalVisibility(false)
        this.setModalData({})
        toastr.success('', modalData.name + ' Removed');
    }

    showModal = (visibility, item) => {
        this.setModalVisibility(visibility)
        this.setModalData(item)
    }

    orderBySelect = (e) => {
        this.setOrderByType(e.target.value)
        this.setActivePage(0)
    }

    sortByMostVoted = (x, y) => {
        const value = y.point - x.point;
        if (value === 0) {
            return this.sortByUpdatedAt(x, y);
        }
        return value;
    };

    sortByLessVoted = (x, y) => {
        const value = x.point - y.point;
        if (value === 0) {
            return this.sortByUpdatedAt(x, y);
        }
        return value;
    };

    sortByUpdatedAt = (x, y) => {
        return new Date(y.updatedAt).getTime() - new Date(x.updatedAt).getTime();
    };

    sortByCreatedAt = (x, y) => {
        return new Date(y.createdAt).getTime() - new Date(x.createdAt).getTime();
    };
    renderLinkItem = () => {
        const { data, updateVote } = this.props;
        const { orderByType, activePage } = this.state;
        if (data && data.length > 0) {
            let pageData = [];
            switch (orderByType) {
                case VoteOrderEnum.LESS_VOTED:
                    pageData = data.sort(this.sortByLessVoted);
                    break;
                case VoteOrderEnum.MOST_VOTED:
                    pageData = data.sort(this.sortByMostVoted);
                    break;
                default:
                    pageData = data.sort(this.sortByCreatedAt);
                    break;
            }

            pageData = pageData.slice(pageSize * activePage, pageSize * (activePage + 1));

            if (pageData.length === 0) {
                pageData = data.slice(pageSize * (activePage - 1), pageSize * activePage);
                this.setActivePage(activePage - 1);
            }
            return pageData.map((link, key) => (
                <LinkItem
                    key={key}
                    item={link}
                    removeClick={this.showModal}
                    updateVote={updateVote}
                />
            ));
        } else {
            return '';
        }
    };
    render() {
        const { data } = this.props;
        const { activePage, modalData, visibility } = this.state;
        const totalSize = Math.floor((data.length - 1) / pageSize);
        return (
            <div>
                <select className={style.orderSelect} onChange={this.orderBySelect}>
                    <option value="">Order by</option>
                    <option value={VoteOrderEnum.MOST_VOTED}>Most Voted (Z->A)</option>
                    <option value={VoteOrderEnum.LESS_VOTED}>Less Voted (A->Z)</option>
                </select>
                {this.renderLinkItem()}
                {totalSize >= 1 && (
                    <Pagination currentPage={activePage} totalSize={totalSize} setActivePage={this.setActivePage} />
                )}
                <CustomModal
                    question='Do you want to remove:'
                    header='Remove Link'
                    data={modalData}
                    onClickOk={this.removeLink}
                    onClickCancel={this.hideModal}
                    visibility={visibility}
                />
            </div>
        )
    }
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