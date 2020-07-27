import React from "react"
import Navbar from "./navbar"
import Sidebar from "./sidebar"
// import { css } from "@emotion/core"

import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      {children}
      </main>
    </div>
  )
}