import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'

import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'

import { urlFor } from "../sanity"

type Props = {
  pageInfo: PageInfo
  experiences: Experience[]
  skills: Skill[]
  projects: Project[]
  socials: Social[]
}


const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className='bg-gray-800 text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-emerald-300/80'>
      <Head>
        <title>{pageInfo?.name} - Portfolio</title>
        <meta name="description" content="Portfolio generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../public/images/20230130_092726_0000.png" />
      </Head>
      
      <main>
        <Header socials={socials} />

        {/* Hero */}
        <section id='hero' className='snap-start'>
          <Hero pageInfo={pageInfo} />
        </section>  

        {/* About */}
        <section id='about' className='snap-center'>
          <About pageInfo={pageInfo} />
        </section>

        {/* Experience */}
        <section id='experience' className='snap-center'>
          <WorkExperience experiences={experiences} />
        </section>

        {/* Skills */}
        <section id='skills' className='snap-start'>
          <Skills skills={skills} />
        </section>

        {/* Projects */}
        <section id='projects' className='snap-start'>
          <Projects projects={projects} />
        </section>

        {/* Contact Me */}
        <section id='contact' className='snap-start'>
          <ContactMe pageInfo={pageInfo} />
        </section>
        
        <Link href="#hero">
          <footer className='sticky bottom-5 w-full cursor-pointer z-20'>
            <div className='flex items-center justify-center'>
              <img
              className='h-10 w-10 rounded-full filter hover:grayscale cursor-pointer object-cover border-4 border-emerald-900'
              src={urlFor(pageInfo?.heroImage).url()}
              alt={pageInfo?.name} 
              // width='32'
              // height='32'
              />
              </div>
          </footer>
        </Link>
      </main>
    </div>
  )
}


export default Home


export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const experiences: Experience[] = await fetchExperiences()
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProjects()
  const socials: Social[] = await fetchSocials()

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },

    //Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  }
} 