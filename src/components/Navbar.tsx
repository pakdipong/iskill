import { Link } from 'react-router-dom'
import Button from './ui/Button'
import { useEffect, useState } from 'react'
import Avatar from './ui/Avatar'


const Navbar = () => {
    const [isLogin, setIsLogin] = useState<boolean | null>(null)

    const handleLoginClick = () => {
        localStorage.setItem('isLogin', 'true')
        loadLocal()
        location.reload()
    }

    const handleLogoutClick = () => {
        localStorage.removeItem('isLogin')
        loadLocal()
        location.reload()
    }

    const loadLocal = () => {
        const loggedIn = localStorage.getItem('isLogin')
        if (loggedIn == 'true') {
            setIsLogin(true)
        } else {
            setIsLogin(false)
        }
    }

    useEffect(() => {
        loadLocal()
    }, [])

    return (
        <header className='bg-white text-neutral-950 shadows-sm z-10 sticky top-0'>
            <div className="container mx-auto px-4">
                <div className='flex items-center h-20 w-full relative'>
                    <div className='flex-1'>
                        <Link to={'/'} className="text-3xl font-bold">iSKiLL.</Link>
                    </div>
                    <div className='flex-none'>
                        {
                            isLogin == null ? null : isLogin ? <Avatar onClick={() => handleLogoutClick()} /> : <Button onClick={() => handleLoginClick()} variant='outlined'>Sign In</Button>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar