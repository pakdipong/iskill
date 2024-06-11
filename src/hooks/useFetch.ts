import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetchCategories = () => {
    const [data, setData] = useState<string[] | null>(null)

    const fetchCategoriesData = async () => {
        const result = await axios('https://60809f81-d9e9-4fce-97ed-3d740a5add3d-00-1ne3v8vv4n7kq.sisko.replit.dev/categories')
        setData(result.data)
    }

    useEffect(() => {
        fetchCategoriesData()
    }, [])

    return { data }
}

// ---------- useFetchCourses -------

type CoursesDataType = {
    id: number
    name: string
    description: string
    category: string
}

export const useFetchCourses = () => {
    const [data, setData] = useState<CoursesDataType[] | null>(null)

    const fetchCategoriesData = async () => {
        const result = await axios('https://60809f81-d9e9-4fce-97ed-3d740a5add3d-00-1ne3v8vv4n7kq.sisko.replit.dev/courses')
        setData(result.data)
    }

    useEffect(() => {
        fetchCategoriesData()
    }, [])

    return { data }
}
