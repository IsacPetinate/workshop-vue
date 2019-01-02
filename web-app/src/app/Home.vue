<template>
  <v-container grid-list-xs>
    <v-layout row justify-center align-content-center>
      <v-flex xs12 md8>
        <v-list dark two-line subheader>
          <v-subheader inset>Eletronicos</v-subheader>
          <v-list-tile
            v-for="eletronico in eletronicos"
            :key="eletronico.id"
            avatar
            @click="link"
          >
            <v-list-tile-avatar>
              <v-icon>smartphone</v-icon>
            </v-list-tile-avatar>
            <!--  -->
            <v-list-tile-content>
              <v-list-tile-title>{{ eletronico.modelo }}</v-list-tile-title>
              <v-list-tile-sub-title>Marca: {{ eletronico.marca }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
            <!--  -->
          <v-divider inset></v-divider>
            <!--  -->
          <v-subheader inset>Softwares</v-subheader>
          <v-list-tile
            v-for="software in softwares"
            :key="software.id"
            avatar
            @click="link"
          >
            <v-list-tile-avatar>
              <v-icon>developer_mode</v-icon>
            </v-list-tile-avatar>
            <!--  -->
            <v-list-tile-content>
              <v-list-tile-title>{{ software.nome }}</v-list-tile-title>
              <v-list-tile-sub-title>Produtora: {{ software.produtora }} — Descrição: {{ software.descricao }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Eletronicos from '../domain/services/eletronicos'
import Softwares from '../domain/services/softwares'

export default {
  name: 'Home',
  data () {
    return {
      eletronicos: [],
      softwares: []
    }
  },
  mounted () {
    Eletronicos.listar().then(resposta => {
      this.eletronicos = resposta.data
    })
    Softwares.listar().then(resposta => {
      this.softwares = resposta.data
    })
  }
}
</script>
