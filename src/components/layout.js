import React from "react"
import "fontsource-poppins/500.css"
import Header from "./header"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}
