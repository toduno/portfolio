import { Cursor, useTypewriter } from "react-simple-typewriter"
import Image from "next/image"
import Link from "next/link"
import { PageInfo } from "../typings"
import { urlFor } from "../sanity"

type Props = {
  pageInfo: PageInfo
}

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [`Hi, I'm ${pageInfo?.name}.`, "I create things", "for the web."],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      {/* <div className="border border-dashed border-emerald-300 px-4 py-8 md:p-10"> */}
      <div className="flex justify-around px-4 py-8 md:p-10">
        <div className="hidden lg:block border-2 border-emerald-300 w-[20vw] h-auto border-l-0 border-t-0 rotate-[135deg]"></div>
        <div>
          <img src={urlFor(pageInfo?.heroImage).url()} alt={pageInfo?.name} 
            className="relative rounded-full h-32 w-32 mx-auto object-cover mb-7" 
          
          />

          <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 mb-4 tracking-[15px]">
              {pageInfo?.role}
            </h2>

            <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
              <span className="mr-3">{text}</span>
              <Cursor cursorColor="#F7Aj86" />
            </h1>

            <div className="pt-5 space-x-1 space-y-1">
              <Link href="#about">
                <button className="heroButton">About</button>
              </Link>
              <Link href="#experience">
                <button className="heroButton">Experience</button>
              </Link>
              <Link href="#skills">
                <button className="heroButton">Skills</button>
              </Link>
              <Link href="#projects">
                <button className="heroButton">Projects</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block border-2 border-emerald-300 w-[20vw] h-auto border-l-0 border-t-0 rotate-[315deg]"></div>
      </div>
    </div>
  )
}

export default Hero