import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `3880px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/contact-us/">Contact Us</Link>
  </Layout>
)

export default IndexPage
