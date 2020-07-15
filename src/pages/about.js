import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const About = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p><Link to="/contact">link</Link>paragraph</p>
        </Layout>
    )
}

export default About