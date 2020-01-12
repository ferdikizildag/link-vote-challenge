import React from 'react';
import { mount } from 'enzyme';
import LinkList from 'components/LinkList';

describe('LinkList', () => {

    const deleteLinkMock = jest.fn();
    const updateVoteMock = jest.fn();
    const removeLinkMock = jest.fn();

    const linkMock = {
        id: '123123',
        point: 1,
        createdAt: new Date(),
        link: 'link',
        name: 'name',
        updatedAt: new Date(),
    };
    let linkListProps = {
        data: [],
        deleteLink: deleteLinkMock,
        updateVote: updateVoteMock,
        removeLink: removeLinkMock
    }

    it('renders without crashing', async () => {
        const wrapper = mount(<LinkList {...linkListProps} />);
        const instance = wrapper.instance();
        expect(instance.render()).toMatchSnapshot();
    });

    it('function setModalVisibility', async () => {
        const wrapper = mount(<LinkList {...linkListProps} />);
        const instance = wrapper.instance();
        instance.setModalVisibility(true);
        expect(instance.state.visibility).toEqual(true);
    });

    it('function setModalData', async () => {
        const wrapper = mount(<LinkList {...linkListProps} />);
        const instance = wrapper.instance();
        instance.setModalData(linkMock);
        expect(JSON.stringify(instance.state.modalData)).toEqual(JSON.stringify(linkMock));
    });

    it('sortByMostVoted of LinkList while points are not equal', async () => {
        const wrapper = mount(<LinkList {...linkListProps} />);
        const instance = wrapper.instance();

        const dumCreatedDate = new Date();
        const dumUpdatedDate = new Date();

        const dumLink1 = {
            createdAt: dumCreatedDate,
            id: 'id',
            link: 'link',
            name: 'name',
            point: 0,
            updatedAt: dumUpdatedDate,
        };
        const dumLink2 = {
            createdAt: dumCreatedDate,
            id: 'id',
            link: 'link',
            name: 'name',
            point: 1,
            updatedAt: dumUpdatedDate,
        };
        expect(instance.sortByMostVoted(dumLink1, dumLink2)).toEqual(1);
    });

    it('sortByMostVoted of LinkList while points are equal', async () => {
        const wrapper = mount(<LinkList {...linkListProps} />);
        const instance = wrapper.instance();

        const dumCreatedDate = new Date();
        const dumUpdatedDate = new Date();

        const dumLink1 = {
            createdAt: dumCreatedDate,
            id: 'id',
            link: 'link',
            name: 'name',
            point: 0,
            updatedAt: dumUpdatedDate,
        };
        const dumLink2 = {
            createdAt: dumCreatedDate,
            id: 'id',
            link: 'link',
            name: 'name',
            point: 0,
            updatedAt: dumUpdatedDate,
        };

        instance.sortByUpdatedAt = jest.fn().mockReturnValue(1);
        await expect(instance.sortByMostVoted(dumLink1, dumLink2)).toEqual(1);
        expect(instance.sortByUpdatedAt).toHaveBeenCalledWith(dumLink1, dumLink2);
    });

    it('sortByLessVoted of LinkList while points are not equal', async () => {
        const wrapper = mount(<LinkList {...linkListProps} />);
        const instance = wrapper.instance();

        const dumCreatedDate = new Date();
        const dumUpdatedDate = new Date();

        const dumLink1 = {
            createdAt: dumCreatedDate,
            id: 'id',
            link: 'link',
            name: 'name',
            point: 1,
            updatedAt: dumUpdatedDate,
        };
        const dumLink2 = {
            createdAt: dumCreatedDate,
            id: 'id',
            link: 'link',
            name: 'name',
            point: 0,
            updatedAt: dumUpdatedDate,
        };
        expect(instance.sortByLessVoted(dumLink1, dumLink2)).toEqual(1);
    });

    it('sortByLessVoted of LinkList while points are equal', async () => {
        const wrapper = mount(<LinkList {...linkListProps} />);
        const instance = wrapper.instance();

        const dumCreatedDate = new Date();
        const dumUpdatedDate = new Date();

        const dumLink1 = {
            createdAt: dumCreatedDate,
            id: 'id',
            link: 'link',
            name: 'name',
            point: 0,
            updatedAt: dumUpdatedDate,
        };
        const dumLink2 = {
            createdAt: dumCreatedDate,
            id: 'id',
            link: 'link',
            name: 'name',
            point: 0,
            updatedAt: dumUpdatedDate,
        };

        instance.sortByUpdatedAt = jest.fn().mockReturnValue(1);
        await expect(instance.sortByLessVoted(dumLink1, dumLink2)).toEqual(1);
        expect(instance.sortByUpdatedAt).toHaveBeenCalledWith(dumLink1, dumLink2);
    });

    it('sortByUpdatedAt of LinkList', async () => {
        const wrapper = mount(<LinkList {...linkListProps} />);
        const instance = wrapper.instance();

        const dumCreatedDate = new Date();
        const dumUpdatedDate = new Date();
        const dumLink1 = {
            createdAt: dumCreatedDate,
            id: 'id',
            link: 'link',
            name: 'name',
            point: 0,
            updatedAt: dumUpdatedDate,
        };

        const dumUpdatedDate2 = new Date(dumUpdatedDate.getDate() + 1);

        const dumLink2 = {
            createdAt: dumCreatedDate,
            id: 'id',
            link: 'link',
            name: 'name',
            point: 0,
            updatedAt: dumUpdatedDate2,
        };

        await expect(instance.sortByUpdatedAt(dumLink1, dumLink2)).toBeLessThan(0);
    });

    it('sortByCreatedAt of LinkList', async () => {
        const wrapper = mount(<LinkList {...linkListProps} />);
        const instance = wrapper.instance();

        const dumCreatedDate = new Date();
        const dumUpdatedDate = new Date();
        const dumLink1 = {
            createdAt: dumCreatedDate,
            id: 'id',
            link: 'link',
            name: 'name',
            point: 0,
            updatedAt: dumUpdatedDate,
        };

        const dumCreatedDate2 = new Date(dumCreatedDate.getDate() + 1);

        const dumLink2 = {
            createdAt: dumCreatedDate2,
            id: 'id',
            link: 'link',
            name: 'name',
            point: 0,
            updatedAt: dumUpdatedDate,
        };

        await expect(instance.sortByCreatedAt(dumLink1, dumLink2)).toBeLessThan(0);
    });

});