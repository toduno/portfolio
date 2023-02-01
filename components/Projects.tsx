import { motion } from "framer-motion"
import Image from "next/image"
import { urlFor } from "../sanity"
import { Project } from "../typings"

type Props = {
    projects: Project[]
}

const Projects = ({ projects }: Props) => {
  return (
    <div className='py-10 h-screen relative flex overflow-hidden flex-col text-left
    max-w-full justify-center mx-auto items-center text-white'>
        <h3 className='-mb-20 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl'>
            Projects
        </h3>
        
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
         scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-emerald-300/40 ">
            {projects?.map((project, i) => ( 
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center
                justify-center  md:p-44 h-screen" key={project?._id}>
                    <motion.img
                        initial={{ 
                            y: -300,
                            opacity: 0
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} 
                        src={urlFor(project?.image).url()}
                        alt='project'
                        className="-mt-4 md:-mt-8 w-80 h-fit object-contain"
                    />

                    <div className="space-y-4 px-0 md:px-10 max-w-6xl z-10">
                        <h4 className="text-3xl font-semibold text-center">
                            <span className="underline decoration-emerald-300/50">{i + 1} / {projects.length}:</span>
                            {" "}
                            {project?.title}
                        </h4>

                        <div className="flex items-center space-x-2 justify-center">
                            {project?.technologies.map((technology) => (
                                <img                       
                                    className="h-7 w-7 object-contain"
                                    key={technology._id}               
                                    src={urlFor(technology.image).url()}
                                    alt={technology.title}
                                />
                            ))}
                        </div>

                        <p className="text-center md:text-left">
                            {project?.summary}
                        </p>

                        <p className="text-center text-green-300 underline"><a href={project?.linkToBuild}>Check it out</a></p>
                    </div>
                </div>
            ))}
        </div>

        <div className='w-full absolute top-[30%] bg-emerald-300/10 left-0 h-[500px] -skew-y-12'></div>
    </div>
  )
}


export default Projects