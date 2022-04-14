import { GetStaticProps } from "next"
import Aside from "../components/Aside"
import Carrousel from "../components/Carrousel"
import Container from "../components/Container"
import Header from "../components/Header"
import ListaProduto from "../components/ListaProduto"
import CategoriaService from "../services/CategoriaService"
import ProdutoService from "../services/ProdutoService"
import Categoria from "../types/Categoria"
import Produto from "../types/Produto"

interface IProps {
  produtos: Produto[]
  categorias: Categoria[]
}

export default function Home(props: IProps) {
  return (
    <>
      <Header />
      <Container>
        <ListaProduto produtos={props.produtos} />
        <Aside categorias={props.categorias} />
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const [data, error] = await ProdutoService.index()
  const [categoriaData, errorCategoria] = await CategoriaService.listAll()
  return {
    props: {
      produtos: error ? [] : data.list.data,
      categorias: errorCategoria ? [] : categoriaData.list
    },

    revalidate: 10
  }
}
