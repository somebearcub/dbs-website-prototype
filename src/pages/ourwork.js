import React from "react"
import Layout from "../components/layout"
import ourWork from "../images/ourwork.png"
import { Link } from "gatsby"

export default function OurWork() {
  return (
    <div>
      <Layout>
        {/* Section 1 */}
        <div class="flex flex-wrap items-center">
          <div class="bg-red-500 px-20 py-10 w-full overflow-hidden sm:w-1/2 flex self-stretch items-center">
            <div>
              <h1 class="text-black text-2xl text-5xl lg:text-6xl md:text-3xl">
                Our work beyond
              </h1>
              <h1 class="text-white text-2xl text-5xl lg:text-6xl md:text-3xl">
                designing a <span class="text-black font-black">bank</span>.
              </h1>
              <p class="font-thin text-black text-xs pt-1 lg:text-xl md:text-sm lg:py-6 md:py-2 sm:py-1">

              </p>
            </div>
          </div>
          <div class="bg-white w-full overflow-hidden sm:w-1/2">
            <img
              src={ourWork}
              alt="sample screens"
              class="flex self-stretch items-center pt-10 pb-10"
            />
          </div>
        </div>
      </Layout>
    </div>
  )
}
