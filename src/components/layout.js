import React from "react"
import Navbar from "./navbar"
import Sidebar from "./sidebar"
import { css } from "@emotion/core"

import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Navbar />
      <Sidebar />
      {children}
    </div>
  )
}