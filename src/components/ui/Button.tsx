import { ReactNode } from "react"

type ButtonProps = {
    variant?: 'contained' | 'outlined'
    children: ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ variant, children, onClick }: ButtonProps) => {
    if (!variant) {
        return <button onClick={onClick} className='flex px-4 py-2 rounded-lg font-medium hover:bg-neutral-300'>{children}</button>
    }
    else if (variant == 'contained') {
        return <button onClick={onClick} className='flex border border-2 border-neutral-950 bg-neutral-950 text-white px-4 py-2 rounded-lg font-medium hover:bg-neutral-700 hover:border-neutral-700'>{children}</button>
    }
    else {
        return <button onClick={onClick} className='flex border border-2 border-neutral-950 px-4 py-2 rounded-lg font-medium hover:bg-neutral-950 hover:text-white'>{children}</button>
    }
}

export default Button