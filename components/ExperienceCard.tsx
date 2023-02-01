import { motion } from "framer-motion"
import Image from "next/image"
import { urlFor } from "../sanity"
import { Experience } from "../typings"

type Props = {
    experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] px-20 py-10 md:p-10 hover:opacity-100 opacity-40 
    cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img
            initial={{
                y: -100,
                opacity: 0
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src={urlFor(experience?.companyImage).url()}
        />

        <div className="px-10 md:px-5 space-y-2 md:space-y-3 overflow-auto
            scrollbar-thin scrollbar-track-black scrollbar-thumb-emerald-300/80">
            <h4 className="text-2xl md:text-4 xl font-light">{experience?.jobTitle}</h4>
            <p className="font-bold text-xl md:text-2xl my-2">{experience?.company}</p>
            <div className="flex gap-x-2">
               {experience.technologies.map(technology => (
                    <img 
                    key={technology._id}
                    src={urlFor(technology.image).url()} 
                    alt={technology.title}
                    className="h-7 w-7 rounded-full object-contain"
                    />
               ))}
            </div>
            <p className="uppercase py-4 pb-2 text-gray-300">{new Date(experience.dateStarted).toDateString()} - {" "}
                {experience.isCurrentlyWorkingHere
                    ? "Present"
                    : new Date(experience.dateEnded).toDateString()
                }
            </p>

            <ul className="list-disc px-5 space-y-4 ml-5 h-auto">
                {experience.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>

    </article>
  )
}

export default ExperienceCard