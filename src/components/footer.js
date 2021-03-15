import React from "react"
import logo from "../images/dbs-design-logo.png"

export default function Footer({ children }) {
  return (
    <div>
      <div class="container mx-auto px-10">
        <div class="px-10 mt-16 border-t-2 border-gray-100 flex flex-col items-center">
          <div class="sm:w-2/3 text-center py-6">
            <p class="text-sm text-gray-400 mb-2">© 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}
