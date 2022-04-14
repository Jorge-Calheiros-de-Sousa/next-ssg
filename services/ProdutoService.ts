import Api from "./Api";

class ProdutoService {

    async index() {
        try {
            const response = await Api.get(`/produtos`)
            return [response.data, false]
        } catch (error) {
            return [null, error]
        }
    }

    async show(id: number) {
        try {
            const response = await Api.get(`/produtos/${id}`)
            return [response.data, false]
        } catch (error) {
            return [null, error]
        }
    }
}

export default new ProdutoService