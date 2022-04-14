import Produto from "../types/Produto";
import Image from "next/image"
import Link from "next/link";

interface IProps {
    produto: Produto
}

export default function ItemProduto(props: IProps) {
    function myLoader() {
        return `http://127.0.0.1:8000/api/produtos/image/${props.produto.foto}`
    }
    return (
        <Link href={`/produtos/${props.produto.id}`} passHref>
            <div className="w-1/3 box-border p-2  shadow-md rounded-md cursor-pointer hover:bg-slate-100">
                <Image
                    loader={myLoader}
                    src={`http://127.0.0.1:8000/api/produtos/image/${props.produto.foto}`}
                    alt={"..."}
                    width={300}
                    height={200}
                    unoptimized
                    priority
                />
                <div className="mt-5">
                    <h1 className="text-lg mb-1"><strong>{props.produto.nome}</strong></h1>
                    <p className="text-green-700"><strong>{props.produto.preco} R$</strong></p>
                    <p className="overflow-hidden h-14">
                        {props.produto.descricao}
                    </p>
                </div>
            </div>
        </Link>
    )
}