import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://my-json-server.typicode.com/isacpetinate/workshop-vue/'
})
