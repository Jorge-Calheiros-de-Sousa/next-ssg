import { useEffect, useState } from "react";
import Produto from "../types/Produto";
import ProdutoService from "../services/ProdutoService";

export default function UseProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([])

    async function pegarTodos() {
        const [data, error] = await ProdutoService.index()
        if (!error) {
            setProdutos(data)
        }
    }


    useEffect(() => { pegarTodos() }, [])

    return {
        produtos,
        pegarTodos
    }
}