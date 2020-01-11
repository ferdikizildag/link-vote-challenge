import React, { Component } from "react";
import './style.scss';
import Layout from 'components/Layout';
import SubmitLinkButtton from 'components/SubmitLinkButtton';
import LinkList from 'components/LinkList';

class Home extends Component {
    render() {
        const { history: { push } } = this.props;
        
        return (
            <Layout>
                <SubmitLinkButtton
                    className='submitButttonStyle'
                    title='SUBMIT A LINK'
                    onClick={() => push('new-link')}
                />
                <div className='line' />
                <LinkList />
            </Layout>
        )
    }
}

export default Home;