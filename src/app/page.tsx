'use client'

import { Hero, Profile, WorkExperience, Projects, Contact } from '@/components'

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
