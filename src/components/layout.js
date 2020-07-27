import React from "react"
import Navbar from "./navbar"
import Sidebar from "./sidebar"
import { css } from "@emotion/core"

import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {children}
    </div>
  )
}