import React from "react"
import logo from "../images/dbs-design-logo.png"
import { Link } from "gatsby"

export default function Header({ children }) {
  return (
    <div class="z-10 bg-transparent">
      <div class="container mx-auto">
        <div class="sm:flex justify-around">
          {/* Site Logo */}
          <a href="#" class="max-w-xs sm: md:min-h-full p-8">
            <img src={logo} alt="Logo" />
          </a>

          {/* Navbar Items */}
          <ul class="text-black sm:self-center border-t sm:border-none">
            <li class="sm:inline-block p-8 hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li class="sm:inline-block p-8 hover:underline">
              <Link to="/ourwork">Our Work</Link>
            </li>
            <li class="sm:inline-block p-8 hover:underline">
                <Link to="/resources">Resources</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
