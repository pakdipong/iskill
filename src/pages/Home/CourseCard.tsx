

import { useState } from 'react'
import { Link } from 'react-router-dom'

type CourseCardProps = {
    id: number
    name: string
    description: string
    category: string
}

const CourseCard = ({ id, name, description, category }: CourseCardProps) => {
    const [isHover, setIsHover] = useState(false)

    return (
        <Link to={`/courses/${id}`}>
            <div onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} className="flex flex-col h-full ">
                <div className='relative'>
                    <div className={`${isHover ? 'block' : 'hidden'} text-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 `}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" className="main-grid-item-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <polygon points="10 8 16 12 10 16 10 8" />
                        </svg>
                    </div>
                    <img className="w-full h-[200px] object-cover" src={`src/assets/course${id}.jpg`} alt={name} />
                </div>
                <div className="flex flex-col p-4 bg-white h-full">
                    <h5 className="text-xl font-bold underline decoration-lime-300 min-h-[56px]">{name}</h5>
                    <p className='min-h-[72px]'>{description}</p>
                    <div className="flex justify-between mt-4">
                        <p className='text-sm opacity-70'>1h 33m</p>
                        <div className="border border-neutral-950 rounded-full px-3 text-sm">{category}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CourseCard