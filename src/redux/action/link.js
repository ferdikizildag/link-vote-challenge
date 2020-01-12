import * as types from "../types";

export const addLink = (data) => {
    return {
        type: types.ADD_LINK,
        value: data
    }
};

export const loadLinkFormLocalStorage = (data) => {
    return {
        type: types.LOAD_LINK_FROM_LOCAL_STORAGE,
        value: data
    }
};

export const deleteLink = (data) => {
    return {
        type: types.DELETE_LINK,
        value: data
    }
};