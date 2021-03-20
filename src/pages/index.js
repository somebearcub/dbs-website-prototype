import React from "react"
import Layout from "../components/layout"
import familyBank from "../images/familybank.png"
import oneBoneS from "../images/onebandonesound.png"
import downArrow from "../images/down-arrow.svg"
import { Link } from "gatsby"
import Button from "../components/button"

export default function Home() {
  return (
    <Layout id="test">
      {/* Section 1 */}
      <div class="flex flex-wrap items-center">
        <div class="bg-white w-full overflow-hidden sm:w-1/2 fade-in">
          <img
            src={familyBank}
            alt="Image of Family with a pot of gold"
            class="flex self-stretch items-center pt-10 pb-10"
          />
        </div>
        <div class="bg-red-500 px-20 py-20 w-full overflow-hidden sm:w-1/2 flex self-stretch items-center">
          <div>
            <h1 class="text-white text-5xl 2xl:text-6xl xl:text-4xl lg:text-2xl md:text-xl slide-up">
              A story of <span class="text-black font-black">people</span>
            </h1>
            <h1 class="text-white text-5xl 2xl:text-6xl xl:text-4xl lg:text-2xl md:text-xl slide-up">
              designing a <span class="text-black font-black">bank</span>.
            </h1>
            <p class="font-thin text-white text-base 2xl:text-lg xl:text-base lg:text-sm md:text-xs lg:py-6 md:py-2 sm:py-1">
              Hi there. This is our story. It's a story about a group of
              designers working in a bank and doing our best to make money
              simple. <br />
              <br />
              Financial services are necessary for our day-to-day lives. They go
              from the tiniest moment — paying your friend back for lunch — to
              the biggest, like applying for a mortgage. And that's why it's
              really important we design them well. <br />
              <br />
              Keep scrolling to find out more about our team.
            </p>
            <br></br>
            <img
              src={downArrow}
              alt="Logo"
              class="animate-bounce duration-500 w-10 p-0"
            />
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div class="flex flex-wrap items-center">
        <div class="bg-red-500 px-20 py-10 w-full overflow-hidden sm:w-1/2 flex self-stretch items-center">
          <div>
            <h1 class="text-white text-5xl 2xl:text-6xl xl:text-4xl lg:text-2xl md:text-xl slide-up">
              One Band,
            </h1>
            <h1 class="text-white text-5xl 2xl:text-6xl xl:text-4xl lg:text-2xl md:text-xl slide-up">
              One Sound,
            </h1>
            <p class="font-thin text-white text-base 2xl:text-lg xl:text-base lg:text-sm md:text-xs lg:py-6 md:py-2 sm:py-1">
              We are a team of 60 (and growing) based out of Singapore. We are
              gamers, cat lovers, calligraphists, crazy gardeners, marathoners,
              cyclists, ukulele-players. 15 nationalities, and counting.
              <br />
              <br />
              <Button buttonText="Get to know us">
              </Button>
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
