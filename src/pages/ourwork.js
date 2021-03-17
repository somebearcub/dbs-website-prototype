import React from "react"
import Layout from "../components/layout"
import ourWork from "../images/ourwork.png"
import peek from "../images/peek.png"
import { Link } from "gatsby"

export default function OurWork() {
  return (
    <div>
      <Layout>
        {/* Section 1 */}
        <div class="flex flex-wrap items-center">
          <div class="bg-white px-20 py-20 w-full overflow-hidden sm:w-1/2 flex self-stretch items-center">
            <div>
              <h1 class="text-black text-5xl 2xl:text-6xl xl:text-4xl lg:text-2xl md:text-xl">
                Our work beyond
              </h1>
              <h1 class="text-black text-5xl 2xl:text-6xl xl:text-4xl lg:text-2xl md:text-xl">
                the numbers
              </h1>
              <p class="font-thin text-black text-base 2xl:text-lg xl:text-base lg:text-sm md:text-xs lg:py-6 md:py-2 sm:py-1">
              The everyday has to be fast and simple. Making a transfer to your mum should not be a wondrous journey of discovery. So we redesigned the digibank mobile app.
              </p>
            </div>
          </div>
          <div class="bg-white w-full overflow-hidden sm:w-1/2">
            <img
              src={ourWork}
              alt="Image of Family with a pot of gold"
              class="flex self-stretch items-center pt-10 pb-10"
            />
          </div>
        </div>
        {/* Section 2 */}
        <div class="flex flex-wrap items-center">
        <div class="bg-white w-full overflow-hidden sm:w-1/2">
            <img
              src={peek}
              alt="peek feature"
              class="flex self-stretch items-center pt-10 pb-10"
            />
          </div>
          <div class="bg-white px-20 py-20 w-full overflow-hidden sm:w-1/2 flex self-stretch items-center">
            <div>
              <h1 class="text-black text-5xl 2xl:text-6xl xl:text-4xl lg:text-2xl md:text-xl">
                Our work beyond
              </h1>
              <h1 class="text-black text-5xl 2xl:text-6xl xl:text-4xl lg:text-2xl md:text-xl">
                the numbers
              </h1>
              <p class="font-thin text-black text-base 2xl:text-lg xl:text-base lg:text-sm md:text-xs lg:py-6 md:py-2 sm:py-1">
              The everyday has to be fast and simple. Making a transfer to your mum should not be a wondrous journey of discovery. So we redesigned the digibank mobile app.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
