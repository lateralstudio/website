import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Motion, spring} from 'react-motion';
import React from "react";
import _ from "underscore";
import {clearScroll} from "../api/actions.js";

const Scroll = (props) => {
    if (_.isNumber(props.scrollTarget)) {
        return (
            <Motion
                defaultStyle={{
                    y: window.scrollY
                }}
                style={{
                    y: spring(props.scrollTarget)
                }}
            >
                {({y}) => {
                    if (Math.abs(y - props.scrollTarget)<1) {
                        window.scroll(window.scrollX, props.scrollTarget);
                        setTimeout(() => {
                            props.clearScroll();
                        }, 0);
                    } else {
                        window.scroll(window.scrollX, y);
                    }
                    return null;
                }}
            </Motion>
        )
    } else {
        return null;
    }
}

function mapStateToProps(state, props) {
    return {
        scrollTarget: state.scrollTarget,
    }
}

function mapDispatchToProps(dispatch, props) {
    return bindActionCreators({
        clearScroll,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Scroll);
