import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as toastrReducer } from 'react-redux-toastr';

const rootReducer = combineReducers({
    form: formReducer,
    toastr: toastrReducer
});

const configureStore = (initialState={}) => {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    );
}

export default configureStore;