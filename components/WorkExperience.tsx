import { motion } from "framer-motion"
import { Experience } from "../typings"
import ExperienceCard from "./ExperienceCard"

type Props = {
  experiences: Experience[]
}

const WorkExperience = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}

      className='py-10 h-screen relative overflow-hidden flex flex-col text-left max-w-full
      px-10 justify-evenly mx-auto items-center'
    >

      <h3 className="mb-14 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">Experience</h3>
   
      <div className="w-full flex justify-center space-x-5 overflow-auto scrollbar-none px-10 "> 
      {/* overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-emerald-800/80 */}
        {experiences?.map(experience => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  )
}

export default WorkExperience