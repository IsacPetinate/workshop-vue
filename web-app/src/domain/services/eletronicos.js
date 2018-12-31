import { http } from '../api/config'

export default {
  // Métodos para GET, POST, PUT, DELETE
  listar: () => {
    return http.get('eletronicos/')
  },
  inserir: (eletronicos) => {
    return http.post('eletronicos/', eletronicos)
  },
  editar: (eletronicos) => {
    return http.put('eletronicos/', eletronicos)
  },
  deletar: (eletronicos) => {
    return http.delete('eletronicos/', eletronicos)
  }
}
