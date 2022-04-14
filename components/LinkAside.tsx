import Link from "next/link"

interface IProps {
    link: string
    titulo: string
}

export default function LinkAside(props: IProps) {
    return (
        <Link href={props.link} passHref>
            <li className="p-2 text-blue-400 underline cursor-pointer border-b-2 hover:bg-blue-300 hover:text-white"><strong>{props.titulo}</strong></li>
        </Link>
    )
}