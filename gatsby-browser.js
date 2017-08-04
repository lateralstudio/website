import {Provider} from 'react-redux'
import React from "react";
import store from './api/store.js'

// This gets returned to Gatsby which then renders the Root component as normal.
const wrapRootComponent = (Root) => {
    return () => (
        <Provider store={store}>
            <Root/>
        </Provider>
    );
};

export {wrapRootComponent};
