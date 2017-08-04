import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import Product from "../components/Product.js";
import Scroll from "../components/Scroll.js";
import Team from "../components/Team.js";
import Title from "../components/Title.js";
import Contact from "../components/Contact.js";
import { config } from 'config'
import 'bulma/css/bulma.css'

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <Title/>
                <Product/>
                <Team/>
                <Contact/>
                <Scroll/>
            </div>
        )
    }
}
