import axios, { AxiosInstance } from "axios";

class Api {
    httpClient: AxiosInstance

    constructor() {
        this.httpClient = axios.create({
            baseURL: "http://127.0.0.1:8000/api"
        })
    }

    get(endpoint: string) {
        return this.httpClient.get(endpoint)
    }
}

export default new Api