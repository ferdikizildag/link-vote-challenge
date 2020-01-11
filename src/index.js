import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import configureStore from './store';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <App />
        <ReduxToastr
            timeOut={30000}
            newestOnTop={false}
            preventDuplicates
            position="top-center"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
        />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
