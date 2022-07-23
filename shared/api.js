import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://api.punkapi.com/v2/',
})
