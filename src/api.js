import axios from 'axios'

const api = axios.create({
    baseURL: 'https://reqres.in/api',
    headers: {
        'x-api-key': 'pub_7bb82091ebaad00566f95f7cb8ae1eda4f742d04f318a89a12825b94f0cf4aac',
        'Content-Type': 'application/json'
    }
})

export const getAllUsers = () => api.get('/users')
export const getUserById = (id) => api.get(`/users/${id}`)
export const createUser = (data) => api.post('/users', data)

export default api