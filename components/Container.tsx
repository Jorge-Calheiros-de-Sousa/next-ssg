interface IProps {
    children: any
}

export default function Container(props: IProps) {
    return (
        <div className="flex justify-around">
            <div className="flex w-4/5">
                {props.children}
            </div>
        </div>
    )
}