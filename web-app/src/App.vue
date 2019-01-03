<template>
  <v-app>
    <!-- V-Toolbar - Componente do Vuetify para a barra superior (navbar menu) -->
    <v-toolbar color="primary" dark app>
      <v-toolbar-title>
        <!-- Icone a esquerda do Titulo -->
        <v-icon>list_alt</v-icon>
        <!-- Titulo da barra superior -->
        <span> MINHAS NOTAS</span>
      </v-toolbar-title>
    </v-toolbar>
    <!-- V-Content define o espaço onde o Router irá carregar os componentes -->
    <v-content>
      <!-- Local onde o Router renderiza os componentes registrados no router.js -->
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>
