import {actions} from "./actions.js";
import _ from "underscore";

const initialState = {
    mainMenuOpen: false,
    currentView: "",
    scrollTarget: null,
}

const setState = (state, props) => {
    return _.extend({}, state, props);
}

function reducers(state=initialState, action) {
    switch(action.type) {
        case actions.SET_CURRENT_VIEW: {
            return setState(state, {
                currentView: action.view,
            });
        }
        case actions.SET_SCROLL_TARGET: {
            return setState(state, {
                scrollTarget: action.scrollTarget
            });
        }
        case actions.CLEAR_SCROLL: {
            return setState(state, {
                scrollTarget: null,
            });
        }
        case actions.TOGGLE_MAIN_MENU: {
            return setState(state, {
                mainMenuOpen: !state.mainMenuOpen,
            });
        }
        default: {
            return state;
        }
    }
};


export default reducers;
