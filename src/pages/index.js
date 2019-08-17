import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello</h1>
            <h2>My name is Karol/ <Link to="/about">o mnie</Link>, Junior front end dev</h2>
            <p> <a href="/contact">kontakt</a></p>
            <p> <Link to="/contact">kontakt</Link></p>
            <p><a href="https://www.google.pl/" target="_blank">google</a></p>
        </Layout>
    )
}

export default IndexPage;