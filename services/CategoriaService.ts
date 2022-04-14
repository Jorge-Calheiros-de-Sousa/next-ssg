import Api from "./Api";


class CategoriaService {
    async index() {
        try {
            const response = await Api.get(`/categorias`)
            return [response.data, false]
        } catch (error) {
            return [null, error]
        }
    }

    async listAll() {
        try {
            const response = await Api.get(`/categorias/listAllCategories/0`)
            return [response.data, false]
        } catch (error) {
            return [null, error]
        }
    }
}

export default new CategoriaService