import { ReactNode } from "react"

type ButtonProps = {
    variant?: 'contained' | 'outlined'
    children: ReactNode
}

const Button = ({ variant, children }: ButtonProps) => {
    if (!variant) {
        return <button className='flex px-4 py-2 rounded-lg font-medium hover:bg-neutral-300'>{children}</button>
    }
    else if (variant == 'contained') {
        return <button className='flex border border-2 border-neutral-950 bg-neutral-950 text-white px-4 py-2 rounded-lg font-medium hover:bg-neutral-700 hover:border-neutral-700'>{children}</button>
    }
    else {
        return <button className='flex border border-2 border-neutral-950 px-4 py-2 rounded-lg font-medium hover:bg-neutral-950 hover:text-white'>{children}</button>
    }
}

export default Button