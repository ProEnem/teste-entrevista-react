import axios from 'axios'

const api = axios.create({
    baseURL: 'https://staging.api.prodigioeducacao.com/'
})

export default api
