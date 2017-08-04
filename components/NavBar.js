import _ from "underscore";
import {bindActionCreators} from "redux";
import classnames from "classnames";
import {connect} from "react-redux";
import {prefixLink} from 'gatsby-helpers'
import React from "react";
import PropTypes from "prop-types";
import {
    setScrollView,
    setScrollTarget,
    toggleMainMenu,
} from "../api/actions.js";

const renderLogo = () => {
    return (
        <div className="nav-left">
            <a
                className="nav-item"
                style={{
                    padding:0,
                    paddingLeft: "20px",
                    paddingTop: "15px",
                }}
            >
                <img
                    src={prefixLink("logo.png")}
                    alt="Lateral Studio logo"
                    style={{
                        maxHeight: "2.5rem",
                    }}
                />
            </a>
        </div>
    )
}

const NavLink = (props) => {
    return (
        <a
            className="nav-item"
            onClick={props.handleClick}
            style={{
                fontSize: "1.2rem",
                paddingRight: "20px",
            }}
        >
            {props.label}
        </a>
    )
}

const MenuToggle = (props) => {
    return (
        <span
            className="nav-toggle"
            style={{
                height:"5rem",
            }}
            onClick={(e) => {
                e.preventDefault();
                props.toggleMainMenu();
            }}
        >
            <span></span>
            <span></span>
            <span></span>
        </span>
    )
}

const MenuItems = (props) => {
    const menuClass = classnames(
        "nav-right",
        "nav-menu",
        {
            "is-active": props.mainMenuOpen,
        }
    );
    const items = [{
        id: "home",
        label: "Home",
    }, {
        id: "product",
        label: "Product",
    }, {
        id: "team",
        label: "Team",
    }, {
        id: "contact",
        label: "Contact",
    }];
    return (
        <div
            className={menuClass}
        >
            {items.map((item) => {
                return (
                    <NavLink
                        key={item.id}
                        label={item.label}
                        handleClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById("view_"+item.id);
                            if (el) {
                                const bodyRect = document.body.getBoundingClientRect();
                                const elemRect = el.getBoundingClientRect();
                                const offset = elemRect.top - bodyRect.top;
                                props.setScrollTarget(offset);
                            }
                        }}
                    />
                )
            })}
        </div>
    )
}

const NavBar = (props) => {
    return (
        <nav
            className="nav"
            style={_.extend({
                height: "5rem"
            }, props.style)}
        >
            {renderLogo()}
            {<MenuToggle {...props}/>}
            {<MenuItems {...props}/>}
        </nav>
    )
}

function mapStateToProps(state, props) {
    return {
        mainMenuOpen: state.mainMenuOpen,
    }
}

function mapDispatchToProps(dispatch, props) {
    return bindActionCreators({
        setScrollTarget,
        setScrollView,
        toggleMainMenu,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
