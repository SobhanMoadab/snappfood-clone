import { FC } from "react"

type ButtonProps = {
    children: any
    color?: string,
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <div className="m-3 font-sans font-medium">
            <button className={`rounded bg-${props.color}-300`}>
                {props.children}
            </button>
        </div>
    )
}