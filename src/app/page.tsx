'use client'

import { Hero } from '@/components'
import Contact from '@/components/Contact/Contact'
import Profile from '@/components/Profile/Profile'
import Projects from '@/components/Projects/Projects'
import WorkExperience from '@/components/WorkExperience/WorkExperience'

export default function Home() {

  return (
    <div>
      <Hero/>
      <Profile/>
      <WorkExperience/>
      <Projects/>
      <Contact />
    </div>
  )
}
