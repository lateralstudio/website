import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import React, {Component} from "react";
import {
    setCurrentView,
    setScrollTarget
} from "../api/actions.js";

class View extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }

    getOffset() {
        const bodyRect = document.body.getBoundingClientRect();
        const elemRect = this.element.getBoundingClientRect();
        return elemRect.top - bodyRect.top;
    }

    handleScroll() {
        if (this.element) {
            const scrollPos = window.scrollY;
            const winHeight = window.innerHeight;
            const offset = this.getOffset();
            if (Math.abs(scrollPos-offset) < winHeight/2) {
                this.props.setCurrentView(this.props.viewId);
            }
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <div
                id={"view_"+this.props.viewId}
                ref={(elem) => {
                    this.element = elem;
                }}
            >
                {this.props.children}
            </div>
        )
    }
}

View.propTypes = {
    viewId: PropTypes.string.isRequired,
}

function mapStateToProps(state, props) {
    return {
        currentView: state.currentView,
    }
}

function mapDispatchToProps(dispatch, props) {
    return bindActionCreators({
        setCurrentView,
        setScrollTarget,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
