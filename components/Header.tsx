import Link from "next/link";
import LinkHeader from "./LinkHeader";

export default function Header() {
    return (
        <header>
            <div className="bg-orange-500 text-white border-b-2 pb-5 flex box-border p-2">
                <Link href={"/"} passHref>
                    <strong className="text-xl cursor-pointer">
                        Usando SSG do NextJs
                    </strong>
                </Link>
            </div>
            <nav>
                <ul className="flex">
                    <LinkHeader titulo="Página inicial" link="/" />
                    <LinkHeader titulo="Sobre" link="/sobre" />
                    <LinkHeader titulo="Contato" link="/contato" />
                </ul>
            </nav>
        </header >
    )
}