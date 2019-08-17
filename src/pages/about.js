import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const About = () => {
    return (

        <Layout>
            <h1>O mnie</h1>
            <p>mam na imie karol</p>
            <p><Link to="/contact">skontaktuj sie</Link></p>
        </Layout>

    )
}

export default About;