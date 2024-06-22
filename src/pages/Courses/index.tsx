
import { useEffect } from 'react'
import SectionLearning from './SectionLearning'

const Courses = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior:'smooth'
  })
  }, [])
  
  return (
    <SectionLearning />
  )
}

export default Courses