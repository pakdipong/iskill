import { useState } from "react"

type AvatarProps = {
    onClick?: React.MouseEventHandler<HTMLLIElement>
}

const Avatar = ({ onClick }: AvatarProps) => {
    const [isToggle, setIsToggle] = useState(false)

    return (
        <>
            <div onClick={() => setIsToggle(!isToggle)}>
                <img className='object-cover w-[50px] h-[50px] rounded-full cursor-pointer' src="/src/assets/profile.jpg" alt="avatar" />
            </div>
            {
                isToggle ?
                    <div className="absolute buttom-0 right-0 mt-2">
                        <ul className='bg-white w-40 border border-neutral-950'>
                            <li onClick={onClick} className='flex items-center p-2 gap-2 cursor-pointer hover:bg-neutral-950 hover:text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" className="main-grid-item-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                    <polyline points="16 17 21 12 16 7" />
                                    <line x1="21" x2="9" y1="12" y2="12" />
                                </svg>
                                <span>
                                    Sign Out
                                </span>
                            </li>
                        </ul>
                    </div>
                    : null
            }
        </>
    )
}

export default Avatar