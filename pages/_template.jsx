import {config} from 'config'
import Helmet from 'react-helmet'
import {Link} from 'react-router'
import NavBar from "../components/NavBar.js";
import {prefixLink} from 'gatsby-helpers'
import PropTypes from 'prop-types'
import React from 'react'
import {rhythm} from '../utils/typography'

export default class Template extends React.Component {
    static propTypes = {
        children: PropTypes.any
    }

    render() {
        return (
            <div>
                <Helmet
                    title={config.siteTitle}
                    meta={[
                        { name: "description", content: "Sample" },
                        { name: "keywords", content: "sample, something" },
                    ]}
                />
                <NavBar
                    style={{
                        position:"fixed",
                        top:0,
                        left:0,
                        width:"100%",
                    }}
                />
                {this.props.children}
                {false && (
                    <div
                        style={{
                            margin: `0 auto`,
                            maxWidth: 960,
                            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
                            paddingTop: 0,
                        }}
                    >
                        {this.props.children}
                    </div>
                )}
            </div>
        )
    }
}
