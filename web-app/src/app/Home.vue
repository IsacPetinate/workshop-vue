<template>
  <v-container grid-list-xs>
    <v-layout row wrap justify-center align-content-center>
      <v-flex md6 xs12>
        <v-card class="espaco" dark>
          <!-- Lista Dinâmica com um FOR que preenche com dados da API -->
          <v-list
            v-for="(nota, i) in notas"
            :key="i"
            class="texto"
          >
          <!-- Interpolação de Variáveis com 'Mustache Sintax {{ var }}' -->
          {{ nota.titulo }}
          <br>
          {{ nota.texto }}
          </v-list>
          <br>
          <!-- Formulário -->
          <form>
            <!-- Campo para entrada do Titulo -->
            <v-text-field
              v-model="nota.titulo"
              label="Titulo"
              id="titulo"
              outline
            ></v-text-field>
            <!-- Campo para a entrada do Texto -->
            <v-textarea
              v-model="nota.texto"
              label="Texto"
              id="texto"
              outline
            >
            </v-textarea>
            <!-- Botão Salvar que chama o Método 'salvar' com o evento @click="" -->
            <v-btn
              @click="salvar"
              color="primary"
            >
              Salvar
            </v-btn>
          </form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// Import do objeto Nota do modulo Notas do nosso /api/services
import Nota from '../domain/services/notas'

export default {
  name: 'Home',
  data () {
    return {
      // Objeto notas recebe os dados do GET
      notas: [],
      // Objeto nota passa os parametros do POST
      nota: {
        id: null,
        titulo: '',
        texto: ''
      }
    }
  },
  methods: {
    // Metodo Listar, retorna os dados do GET na variável 'resposta'
    listar () {
      Nota.listar().then(resposta => {
        console.log(resposta)
        this.notas = resposta.data
      })
    },
    // Metodo Salvar, passa os parametros do objeto nota para o POST
    salvar () {
      Nota.salvar(this.nota).then(resposta => {
        this.nota = resposta.data
        this.listar() // Atualiza a lista após inserir um novo item
        this.nota = {} // Limpa os campos após inserir novos dados
      })
    }
  },
  // Ciclo de vida da aplicação Monta a chama do método Listar
  // Guia: https://br.vuejs.org/v2/guide/instance.html
  mounted () {
    this.listar()
  }
}
</script>

<style>
.texto {
  font-size: 15px;
}
.espaco {
  padding: 15px;
}
</style>
