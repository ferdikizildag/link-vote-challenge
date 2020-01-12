import * as types from "../types";
import LocalStorageService from 'utils/helper';
import { VoteTypeEnum } from 'utils/enum';

const initialState = {
    links: []
};

const linkReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_LINK: {
            const currentLinks = { ...state }.links
            currentLinks.push(action.value)
            LocalStorageService.setItem('links', currentLinks);
            return { ...state, links: currentLinks }
        }
        case types.LOAD_LINK_FROM_LOCAL_STORAGE: {
            const links = LocalStorageService.getItem('links');
            return { ...state, links: links }
        }
        case types.DELETE_LINK: {
            let links = { ...state }.links
            const link = action.value;
            links = links.filter((item) => item.id !== link.id);
            LocalStorageService.setItem('links', links);
            return { ...state, links: links }
        }
        case types.UPDATE_VOTE: {
            let currentLinks = { ...state }.links
            let role = action.role;
            let selectedLink = action.value;
            let newLinks = [];
            currentLinks.map((item) => {
                if (item.id === selectedLink.id) {
                    if (role === VoteTypeEnum.UP) {
                        newLinks.push({
                            ...item,
                            point: item.point + 1,
                            updatedAt: new Date()
                        })
                    } else {
                        newLinks.push({
                            ...item,
                            point: item.point !== 0 ? item.point - 1 : 0,
                            updatedAt: new Date()
                        })
                    }
                } else {
                    newLinks.push(item)
                }
                return newLinks;
            })
            LocalStorageService.setItem('links', newLinks);
            return { ...state, links: newLinks }
        }
        default:
            return state;
    }
};

export default linkReducer;