import { Link } from "gatsby"
import PropTypes from "prop-types"
import headerStyles from "./header.module.css"
import React from "react"
import Logo from "./logo"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div
      style={{
        display: "absolute",
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.08rem`,
      }}
    >
      <div
        // className={headerStyles.logoContainer}
        style={{
          // marginLeft: `1rem`,
          // TODO: WORKING ON POSITIONING OF LOGO
          display: "relative",
          left: "5 rem",
          maxWidth: 100,
          padding: `1.45rem 1.08rem`,
        }}
      >
        <Logo />
      </div>

      <h1 style={{ margin: 0 }}>
        <Link className={headerStyles.titlelink} to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
