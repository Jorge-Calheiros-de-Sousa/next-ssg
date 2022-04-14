import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image"
import Header from "../../components/Header";
import ProdutoService from "../../services/ProdutoService";
import Produto from "../../types/Produto";

interface IProps {
    produto: Produto
}

export default function ProdutoShow(props: IProps) {
    function myLoader() {
        return `http://127.0.0.1:8000/api/produtos/image/${props.produto.foto}`
    }
    return (
        <>
            {props.produto ?
                <>
                    <Header />
                    <div className="flex justify-around">
                        <div className="box-border p-2 border-2 rounded-md w-1/2">
                            <Image
                                loader={myLoader}
                                src={`http://127.0.0.1:8000/api/produtos/image/${props.produto.foto}`}
                                alt={"..."}
                                width={1000}
                                height={500}
                                unoptimized
                                priority
                            />
                            <h1><strong>{props.produto.nome}</strong></h1>
                            <h1 className="text-green-600"><strong>{props.produto.preco}</strong></h1>
                            <p className="mb-2">Em estoque: {props.produto.estoque}</p>
                            <p>
                                {props.produto.descricao}
                            </p>
                        </div>
                    </div>
                </>
                :
                '...Carregando'
            }
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const [data, error] = await ProdutoService.index()

    const paths = data.list.data.map((produto: Produto) => {
        return { params: { id: produto.id.toString() } }
    })

    return {
        paths,
        fallback: true
    }
}


export const getStaticProps: GetStaticProps = async (context) => {
    const { id }: any = context.params

    const [data, error] = await ProdutoService.show(id)

    return {
        props: {
            produto: error ? {} : data.produto
        }
    }
}