import { useEffect, useState } from "react"
import { useFetchCategories, useFetchCourses } from "../../hooks/useFetch"
import CourseCard from "./CourseCard"


const SectionCourses = () => {
    const categoriesData = useFetchCategories().data
    const coursesData = useFetchCourses().data

    const [selectCategories, setSelectCategories] = useState('All')
    const [filterCourses, setFilterCourses] = useState(coursesData)

    const showCourses = () => {
        if (coursesData) {
            selectCategories == 'All' ? setFilterCourses(coursesData) : setFilterCourses(coursesData.filter((course) => course.category == selectCategories))
        }
    }

    useEffect(() => {
        showCourses()
    }, [selectCategories, coursesData])

    return (
        <section className='bg-neutral-100 text-neutral-950 py-10'>
            <div className='container mx-auto px-4'>
                <div className="flex justify-center">
                    <h2 className='bg-lime-300 text-4xl md:text-5xl font-bold text-center'>Courses</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mt-10">
                    {
                        categoriesData ? ['All', ...categoriesData].map((category, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={() => setSelectCategories(category)}
                                    className={`${selectCategories == category ? 'bg-neutral-950 text-white' : ''} border border-neutral-950 px-4 py-1 rounded-full hover:bg-neutral-950 hover:text-white cursor-pointer`}
                                >{category}</button>
                            )
                        }) : <div>Loading...</div>
                    }
                </div>
                <div className="mt-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {
                            filterCourses ? filterCourses.map((course) => {
                                return (
                                    <CourseCard
                                        key={course.id}
                                        id={course.id}
                                        name={course.name}
                                        description={course.description}
                                        category={course.category}
                                    />
                                )
                            }) : null
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionCourses