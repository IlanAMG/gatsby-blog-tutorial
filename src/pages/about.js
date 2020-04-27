import React from 'react'

import SEO from '../components/seo';
import Layout from "../components/layout"
import Bio from '../components/bio';

const About = () => {
    return (
        <Layout page='4' >
            <SEO title='About' />
                <h1>About</h1>
                <Bio />
        </Layout>
    )
}

export default About
