import { useParams } from "react-router-dom"
import { useFetchCoursesID } from "../../hooks/useFetch"
import { useState } from "react"


const SectionLearning = () => {
    const { id } = useParams()
    const courses = useFetchCoursesID(id).data

    const [lessonSelect, setLessonSelect] = useState(1)
    const [isLessonOne, setIsLessonOne] = useState(true)

    const handleClick = (lesson: number) => {
        lesson == 1 ? setIsLessonOne(true) : setIsLessonOne(false)
        setLessonSelect(lesson)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <section className='py-4 lg:py-10 bg-neutral-200'>
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2 bg-white lg:p-4">
                        <div className="w-full aspect-video">
                            {
                                isLessonOne ? <video autoPlay controls src={`/src/assets/course${id}.mp4`} /> : <div className="flex h-full items-center justify-center text-3xl md:text-6xl font-bold bg-neutral-300">Coming Soon</div>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col  lg:sticky lg:top-[120px]">
                        <div className='px-4 py-8 bg-white'>
                            {
                                courses ?
                                    <>
                                        <div className="flex">
                                            <h1 className='text-2xl lg:text-3xl font-bold bg-lime-300'>{courses.name}</h1>
                                        </div>
                                        <p className='mt-3'>{courses.description}</p>
                                        <div className='flex mt-3'>
                                            <div className="border border-neutral-950 rounded-full px-3 text-sm">{courses.category}</div>
                                        </div>
                                    </>
                                    : 'Loading...'
                            }
                        </div>
                    </div>
                    <div className='lg:col-span-2 flex flex-col px-4 py-8  bg-white'>
                        <div className="flex flex-col sm:flex-row gap-2 sm:justify-between sm:items-center ">
                            <div className="text-2xl font-bold underline decoration-lime-300">Lessons in This Class</div>
                            <div className="font-bold">5 Lessons (1h 33m)</div>
                        </div>
                        <div className="flex flex-col mt-8">
                            {
                                courses ? [1, 2, 3, 4, 5].map((lesson) => {
                                    return (
                                        <div key={lesson} onClick={() => handleClick(lesson)} className={`${lessonSelect === lesson ? 'bg-neutral-950 text-white border-neutral-950' : 'border-white'} flex gap-2 items-center p-3 border-2 hover:border-neutral-950 cursor-pointer`}>
                                            <div className="flex-1 flex gap-2 items-center">
                                                <div>
                                                    {
                                                        lesson == 1 ?
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                                <circle cx="12" cy="12" r="10" />
                                                                <polygon points="10 8 16 12 10 16 10 8" />
                                                            </svg>
                                                            :
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                                <rect height="11" rx="2" ry="2" width="18" x="3" y="11" />
                                                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                                            </svg>

                                                    }
                                                </div>
                                                <div className="flex gap-2">
                                                    <div>{lesson}. </div>
                                                    {
                                                        lesson == 1 && courses ? <div>{courses.name}</div> : <div>Lesson {lesson}</div>
                                                    }
                                                </div>
                                            </div>
                                            <div className="flex-none">18:36</div>
                                        </div>
                                    )
                                })
                                    : 'Loading...'
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionLearning