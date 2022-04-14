import Produto from "../types/Produto";
import ItemProduto from "./ItemProduto";

interface IProps {
    produtos: Produto[]
}

export default function ListaProduto(props: IProps) {
    return (
        <div className="flex flex-wrap w-full box-border p-2 ">
            {
                props.produtos.map(produto => {
                    return (
                        <ItemProduto produto={produto} key={produto.id} />
                    )
                })
            }
        </div>
    )
}