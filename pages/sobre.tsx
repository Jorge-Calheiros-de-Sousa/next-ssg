import Header from "../components/Header";

export default function Sobre() {
    return (
        <>
            <Header />
            <p className="mt-10 box-border p-10">
                <h1 className="text-3xl underline">Sobre</h1>
                <p>Nesse repositorio estou usando as api de um Ecommerce para apenas pegar os produtos e um unico produto <br /> afim de usar o <strong>SSG</strong> do NextJs para transformar páginas dinamincas em estáticas para um navegação mais rápida</p>
            </p>
        </>
    )
}