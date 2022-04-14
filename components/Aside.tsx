import Categoria from "../types/Categoria"
import LinkAside from "./LinkAside"

interface IProps {
    categorias: Categoria[]
}

export default function Aside(props: IProps) {
    return (
        <aside className="w-1/4 box-border p-2 rounded-sm">
            <nav>
                <ul>
                    {
                        props.categorias.map(categoria => {
                            return (
                                <LinkAside link={`?categoria=${categoria.slug}`} titulo={categoria.nome} key={categoria.id} />
                            )
                        })
                    }
                </ul>
            </nav>
        </aside>
    )
}