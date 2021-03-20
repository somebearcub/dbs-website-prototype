import React from "react"
import { Link } from "gatsby"

export default function Button({ buttonText }) {
  return (
    <div>
      <Link to="/">
        <div class="buttonSecondary bounce">
          <p>{buttonText}</p>
        </div>
      </Link>
    </div>
  )
}
