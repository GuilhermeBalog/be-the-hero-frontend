import axios from 'axios'

const api = axios.create({
    baseURL: "https://balog-be-the-hero.herokuapp.com/"
})

export default api
