import SectionHero from './SectionHero'
import SectionCourses from './SectionCourses'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  
  return (
    <>
      <SectionHero />
      <SectionCourses />
    </>
  )
}

export default Home