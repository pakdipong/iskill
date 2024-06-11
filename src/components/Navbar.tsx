import { Link } from 'react-router-dom'
import Button from './ui/Button'


const Navbar = () => {
    return (
        <header className='bg-white text-neutral-950 shadows-sm z-10 sticky top-0'>
            <div className="container mx-auto px-4">
                <div className='flex items-center h-20 w-full'>
                    <div className='flex-1'>
                        <Link to={'/'} className="text-3xl font-bold">iSKiLL.</Link>
                    </div>
                    <div className='flex-none'>
                        <Button variant='outlined'>Sign In</Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar