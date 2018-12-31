import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://localhost/',
  setTimeout: 15000
})
