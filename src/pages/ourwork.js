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
                The everyday has to be fast and simple. Making a transfer to
                your mum should not be a wondrous journey of discovery. So we
                redesigned the digibank mobile app.
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
          <div class="bg-white w-full overflow-hidden sm:w-1/2 flex self-stretch items-center place-content-center">
            <img
              src={peek}
              alt="peek feature"
              class="w-4/12"
            />
          </div>
          <div class="bg-white px-20 py-20 w-full overflow-hidden sm:w-1/2 flex self-stretch items-center">
            <div>
              <h1 class="text-black text-5xl 2xl:text-6xl xl:text-4xl lg:text-2xl md:text-xl">
                17,000,000
              </h1>
              <h1 class="text-black text-5xl 2xl:text-6xl xl:text-4xl lg:text-2xl md:text-xl">
                peeks a month
              </h1>
              <p class="font-thin text-black text-base 2xl:text-lg xl:text-base lg:text-sm md:text-xs lg:py-6 md:py-2 sm:py-1">
                ‘Did I get my salary?’ ‘Has my student loan payment gone
                through?’ It feels good to peek at your balance ‘just to make
                sure.’ Peek balance is one of our most popular features. But it
                wasn’t always so. In fact, in the beginning, no one liked it —
                our users or our stakeholders. But the user behaviour we had
                observed told a different story. So we kept at it. And it worked
                out. “Peek balance is a useful little design solution that
                nobody thought they wanted.” - Ed Chu Design Lead, Consumer
                Banking Group
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
