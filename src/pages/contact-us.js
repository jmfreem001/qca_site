import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Request Quote" />
    <h1>Get a QUote</h1>
    <p>Contact us to get a quote</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
