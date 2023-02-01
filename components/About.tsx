import { motion } from "framer-motion"
import { urlFor } from "../sanity"
import { PageInfo } from "../typings"
import { fetchPageInfo } from "../utils/fetchPageInfo"

type Props = {
    pageInfo: PageInfo
}

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{duration: 1.5 }}

        className="flex flex-col relative h-screen text-center md:text-left max-w-7xl
        px-10 justify-center mx-auto items-center overflow-hidden"
    >   
        <h3 className="mb-10 md:mb-19 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">About</h3>
        
       <div className="flex flex-col lg:flex-row items-center">
        <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}

                src={urlFor(pageInfo?.profilePic).url()}
                className="md:mb-0 flex-shrink-0 w-56 h-56 object-cover
                rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] mb-4 hidden" 
            />
            
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-3xl md:text-4xl font-semibold text-center">
                    Here is a {" "}
                    <span className="underline decoration-emerald-300/50">little</span>{" "}
                    info
                </h4>

                <p>
                    {pageInfo?.backgroundInformation}
                </p>
            </div>

            <div className='w-full absolute top-[30%] bg-emerald-300/10 left-0 h-[500px] skew-y-12'></div>
       </div>
    </motion.div>
  )
}

export default About