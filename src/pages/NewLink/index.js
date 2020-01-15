import React, { Component } from "react";
import { connect } from 'react-redux';
import Layout from 'components/Layout';
import style from './style.module.scss';
import { Link } from 'react-router-dom';
import CreateLinkForm from './CreateLinkForm';
import { addLink } from 'redux/action/link';
import { toastr } from 'react-redux-toastr';
import uuid from 'uuid';

class NewLink extends Component {

    formSubmit = (values) => {
        const { addLink,history: { push }, links } = this.props;
        const link = { ...values, point: 0, id: uuid(), createdAt: new Date(), updatedAt: new Date() }
        console.log(links)
        const isExist=links.find((item)=>item.name === values.name);
        console.log(isExist)
        addLink(link);
        push('/');
        toastr.success('', link.name + ' Added');
    }

    render() {
        return (
            <Layout>
                <div className={style.frame}>
                    <Link to="/" className={style.backLink}>
                        <span className="oi oi-arrow-left" />
                        <span>Return to List</span>
                    </Link>
                    <CreateLinkForm onSubmit={this.formSubmit} />
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        links: store.linkReducer.links
    };
}

const mapDispatchToProps = {
    addLink
};

export default connect(mapStateToProps, mapDispatchToProps)(NewLink);