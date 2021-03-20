import React from "react"
import Layout from "../components/layout"
import Card from "../components/card"

export default function Resources() {
  return (
    <div>
      <Layout>
        <div class="card_main fade-in">
          <form class="pb-2 px-4">
            <input
              type="text"
              searchQuery="firstName"
              placeholder="Search for a resource..."
              class="searchBar"
            />
          </form>
          <ul class="cards">
            <li class="cards_item">
              <Card
                cardTitle="Resource Name"
                cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                cardTag="Tag"
              />
            </li>
            <li class="cards_item">
              <Card
                cardTitle="Resource Name"
                cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                cardTag="Tag"
              />
            </li>
            <li class="cards_item">
              <Card
                cardTitle="Resource Name"
                cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                cardTag="Tag"
              />
            </li>
            <li class="cards_item">
              <Card
                cardTitle="Resource Name"
                cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                cardTag="Tag"
              />
            </li>
            <li class="cards_item">
              <Card
                cardTitle="Resource Name"
                cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                cardTag="Tag"
              />
            </li>
            <li class="cards_item">
              <Card
                cardTitle="Resource Name"
                cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                cardTag="Tag"
              />
            </li>
          </ul>
        </div>
      </Layout>
    </div>
  )
}
