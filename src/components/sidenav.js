import React from "react"

export default function SideNav({ children }) {
  return (
    <div>
      <div class="sidenav">
        {children}
      </div>
    </div>
  )
}
