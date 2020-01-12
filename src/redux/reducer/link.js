import * as types from "../types";
import LocalStorageService from 'utils/helper';

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
        default:
            return state;
    }
};

export default linkReducer;