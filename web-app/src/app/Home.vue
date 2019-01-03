<template>
  <v-container grid-list-xs>
    <v-layout row justify-center align-content-center>
      <v-flex xs12 md8>
        <v-card dark>
          <v-list
            v-for="(nota, index) in notas"
            :key="index.id"
            class="espaco"
          >
            {{ nota.titulo }}
            <br>
            {{ nota.texto }}
            <!-- <v-btn
              @click="remover"
              right flat
              icon color="red"
            >
              <v-icon>delete</v-icon>
            </v-btn> -->
          </v-list>
          <v-divider></v-divider>
          <v-form class="espaco">
            <v-text-field
              v-model="nota.titulo"
              name="titulo"
              label="Titulo"
              id="titulo"
              outline
            ></v-text-field>
            <v-textarea
              v-model="nota.texto"
              name="texto"
              label="Texto"
              id="texto"
              outline
            ></v-textarea>
            <v-spacer></v-spacer>
            <v-btn @click="salvar" color="success">Salvar</v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Nota from '../domain/services/Notas'

export default {
  name: 'Home',
  data () {
    return {
      notas: [],
      nota: {
        id: null,
        titulo: '',
        texto: ''
      }
    }
  },
  methods: {
    listar () {
      Nota.listar().then(resposta => {
        this.notas = resposta.data
      })
    },
    salvar () {
      Nota.salvar(this.nota).then(resposta => {
        alert('Salvo com sucesso!')
        this.listar()
        this.nota = {}
      })
    },
    remover (nota) {
      // if (confirm('Tem certeza que deseja excluir o item?')) {}
      Nota.apagar(nota).then(resposta => {
        this.listar()
      })
    }
  },
  mounted () {
    this.listar()
  }
}
</script>

<style>
.espaco {
  padding: 25px;
}
</style>
