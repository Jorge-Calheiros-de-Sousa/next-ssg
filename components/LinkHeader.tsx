import Link from "next/link"

interface IProps {
    titulo: string
    link: string
}

export default function LinkHeader(props: IProps) {
    return (
        <Link href={props.link} passHref>
            <li className="text-center p-1 w-1/6 cursor-pointer hover:bg-slate-200"><strong>{props.titulo}</strong></li>
        </Link>
    )
}