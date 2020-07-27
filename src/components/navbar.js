import React from 'react'
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { useStaticQuery, Link, graphql } from "gatsby"

export default function Navbar() {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
      )
    return (
        <div>
        <Link to={`/`}>
        <h3 css={css`margin-bottom: ${rhythm(2)};display: inline-block; font-style: normal;`}>
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link to={`/about/`} css={css`float: right; margin:0.3em;`}>About</Link>
      <Link to={`/my-files/`} css={css`float: right; margin:0.3em;`}>My Files</Link>
      </div>
    )
}
