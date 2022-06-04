import axios from 'axios'


export const testloApi = axios.create({
    baseURL: '/api',
})