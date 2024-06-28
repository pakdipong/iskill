
import { useEffect } from 'react'
import SectionLearning from './SectionLearning'
import { useParams } from 'react-router-dom'
import { useFetchCoursesID } from '../../hooks/useFetch'
import NotFound from '../NotFound'

const Courses = () => {
  const { id } = useParams()
  const { data, isError } = useFetchCoursesID(id)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
  }, [])
  
  if (data) {
    return <SectionLearning courses={data} />
  }else if (isError) {
    return <NotFound />
  }


}

export default Courses