import React from 'react'
// import { css } from "@emotion/core"
// import { rhythm } from "../utils/typography"
// import { useStaticQuery, Link, graphql } from "gatsby"

export default function Navbar() {
    // const data = useStaticQuery(
    //     graphql`
    //       query {
    //         site {
    //           siteMetadata {
    //             title
    //           }
    //         }
    //       }
    //     `
    //   )
    return (
      
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="https://getbootstrap.com/docs/4.5/examples/dashboard/#">Luminate</a>
      <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <a className="nav-link" href="https://getbootstrap.com/docs/4.5/examples/dashboard/#">Sign out</a>
        </li>
      </ul>
    </nav>
      //   <div>
      //   <Link to={`/`}>
      //   <h3 css={css`margin-bottom: ${rhythm(2)};display: inline-block; font-style: normal;`}>
      //     {data.site.siteMetadata.title}
      //   </h3>
      // </Link>
      // <Link to={`/about/`} css={css`float: right; margin:0.3em;`}>About</Link>
      // <Link to={`/my-files/`} css={css`float: right; margin:0.3em;`}>My Files</Link>
      // </div>
    )
}
