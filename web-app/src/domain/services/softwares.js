import { http } from '../api/config'

export default {
  // Métodos para GET, POST, PUT, DELETE
  listar: () => {
    return http.get('softwares/')
  },
  inserir: (softwares) => {
    return http.post('softwares/', softwares)
  },
  editar: (softwares) => {
    return http.put('softwares/', softwares)
  },
  deletar: (softwares) => {
    return http.delete('softwares/', softwares)
  }
}
