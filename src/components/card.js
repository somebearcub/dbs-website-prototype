import React from "react"
import { Link } from "gatsby"

export default function Card({ image, cardTitle, cardText, cardTag }) {
  return (
    <div>
      <Link to="/">
        <div class="card">
          <div class="card_image">
            {/* We can also add an {image} here. */}
            <img src="https://via.placeholder.com/50" />
          </div>
          <div class="card_content">
            <h2 class="card_title">{cardTitle}</h2>
            <p class="card_text">{cardText}</p>
            <p class="card_tag">{cardTag}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
