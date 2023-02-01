import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import Link from "next/link"
import { Social } from "../typings"

type Props = {
  socials: Social[]
}

const Header = ({ socials }: Props) => {
  return (
    <header className="px-3 md:py-2 md:px-7 sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
        <motion.div 
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5,
        }}
        
        className="flex items-center w-24 md:w-auto">
          {socials.map((social) => (
            <SocialIcon key={social._id} url={social.url} fgColor="gray" bgColor="transparent" />
          ))}
        </motion.div>

        <Link href='#contact'>
          <motion.div 
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1.5,
          }}

          className="flex items-center text-gray-300 cursor-pointer w-10 md:w-auto">
            <SocialIcon
              network="email"
              fgColor="gray"
              bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Contact me</p>
          </motion.div>
        </Link>
    </header>
  )
}

export default Header


