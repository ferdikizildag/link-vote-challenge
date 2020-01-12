import React, { Component } from "react";
import { connect } from 'react-redux';
import style from './style.module.scss';
import Layout from 'components/Layout';
import SubmitLinkButtton from 'components/SubmitLinkButtton';
import LinkList from 'components/LinkList';
import { deleteLink, updateVote } from 'redux/action/link';

class Home extends Component {
    render() {
        const { history: { push }, links, deleteLink, updateVote } = this.props;

        return (
            <Layout>
                <SubmitLinkButtton
                    className={style.submitButttonStyle}
                    title='SUBMIT A LINK'
                    onClick={() => push('new-link')}
                />
                <div className={style.line} />
                <LinkList data={links} deleteLink={deleteLink} updateVote={updateVote} />
            </Layout>
        )
    }
}


const mapDispatchToProps = {
    deleteLink,
    updateVote
};

const mapStateToProps = (store) => {
    return {
        links: store.linkReducer.links
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);