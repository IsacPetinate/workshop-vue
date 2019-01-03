import { http } from '../api/config'

export default {
  // Métodos para GET, POST, PUT, DELETE
  listar: () => {
    return http.get('notas/')
  },
  salvar: (nota) => {
    return http.post('notas/', nota)
  },
  apagar: (nota) => {
    return http.delete('notas/', { data: nota })
  }
}
