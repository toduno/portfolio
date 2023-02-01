import { motion } from "framer-motion"
import { urlFor } from "../sanity"
import { Skill } from "../typings"

type Props = {
    skill: Skill
    directionLeft?: boolean
}

const Skill = ({ skill, directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img
            initial={{
                x: directionLeft ? -50 : 50,
                opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}

            src={urlFor(skill?.image).url()}
            
            className="rounded-lg p-4 border border-gray-500 object-contain w-24 h-24 md:w-28
            md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
            ease-in-out"
        />

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-[100%] w-[100%] md:w-28 md:h-28 xl:w-32 xl:h-32
        rounded-md z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">{skill.progress}%</p>
            </div>
        </div>
        
    </div>
  )
}

export default Skill