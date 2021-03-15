import React from "react"
import Layout from "../components/layout"
import familyBank from "../images/familybank.png"

export default function Home() {
  return (
    <Layout>
      <div class="container max-w-full flex flex-row">
        {/* TODO: Adjust for mobile */}
        <div class="bg-white flex-auto h-screen max-w-screen-lg mx-auto">
          <div class="block">
            <img
              src={familyBank}
              alt="Image of Family with a pot of gold"
              class="mx-auto"
            />
          </div>
        </div>
        <div class="bg-red-500 max-w-screen-lg flex-auto h-screen">test</div>
      </div>
    </Layout>
  )
}
