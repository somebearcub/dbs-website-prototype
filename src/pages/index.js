import React from "react"
import Layout from "../components/layout"
import familyBank from "../images/familybank.png"
import oneBoneS from "../images/onebandonesound.png"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      {/* Section 1 */}
      <div class="flex flex-wrap items-center">
        <div class="bg-white w-full overflow-hidden sm:w-1/2">
          <img
            src={familyBank}
            alt="Image of Family with a pot of gold"
            class="flex self-stretch items-center pt-10 pb-10"
          />
        </div>
        <div class="bg-red-500 px-20 py-10 w-full overflow-hidden sm:w-1/2 flex self-stretch items-center">
          <div>
            <h1 class="text-white text-2xl text-5xl lg:text-6xl md:text-3xl">
              A story of <span class="text-black font-black">people</span>
            </h1>
            <h1 class="text-white text-2xl text-5xl lg:text-6xl md:text-3xl">
              designing a <span class="text-black font-black">bank</span>.
            </h1>
            <p class="font-thin text-white text-xs pt-1 lg:text-xl md:text-sm lg:py-6 md:py-2 sm:py-1">
              Hi there. This is our story. It's a story about a group of
              designers working in a bank and doing our best to make money
              simple. <br />
              <br />
              Financial services are necessary for our day-to-day lives. They go
              from the tiniest moment — paying your friend back for lunch — to
              the biggest, like applying for a mortgage. And that's why it's
              really important we design them well. <br />

              Keep scrolling to find out more about our team.
            </p>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div class="flex flex-wrap items-center">
        <div class="bg-red-500 px-20 py-10 w-full overflow-hidden sm:w-1/2 flex self-stretch items-center">
          <div>
            <h1 class="text-white text-2xl text-5xl lg:text-6xl md:text-3xl">
              One Band,
            </h1>
            <h1 class="text-white text-2xl text-5xl lg:text-6xl md:text-3xl">
              One Sound,
            </h1>
            <p class="font-thin text-white text-xs pt-1 lg:text-xl md:text-sm lg:py-6 md:py-2 sm:py-1">
            We are a team of 60 (and growing) based out of Singapore. We are
                gamers, cat lovers, calligraphists, crazy gardeners,
                marathoners, cyclists, ukulele-players. 15 nationalities, and
                counting.
                <br />
                <br />
                <Link class="underline hover:no-underline" to="/">
                  Get to know us.
                </Link>
            </p>
          </div>
        </div>
        <div class="bg-white w-full overflow-hidden sm:w-1/2">
          <img
            src={oneBoneS}
            alt="collection of avatars"
            class="flex self-stretch items-center pt-10 pb-10"
          />
        </div>
      </div>
    </Layout>
  )
}
