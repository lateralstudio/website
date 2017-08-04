import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { prefixLink } from 'gatsby-helpers'
import { TypographyStyle } from 'react-typography'
import typography from './utils/typography'

const BUILD_TIME = new Date().getTime()

export default class HTML extends React.Component {
    static propTypes = {
        body: PropTypes.string
    }

    render() {
        const head = Helmet.rewind()

        let css
        if (process.env.NODE_ENV === 'production') {
            css = (
                <style
                    dangerouslySetInnerHTML={{
                        __html: require('!raw!./public/styles.css'),
                    }}
                />
            )
        }

        return (
            <html lang="en">
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    {head.title.toComponent()}
                    {head.meta.toComponent()}
                    <TypographyStyle typography={typography} />
                    {css}
                    <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
                    <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
                </head>
                <body>
                    <div
                        id="react-mount"
                        dangerouslySetInnerHTML={{ __html: this.props.body }}
                    />
                    <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
                </body>
            </html>
        )
    }
}
