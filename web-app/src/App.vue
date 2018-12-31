<template>
  <v-app>
    <v-toolbar dark app>
      <v-toolbar-title class="headline">
        <v-icon>format_list_numbered</v-icon>
        <span class="font-weight-light"> Minha Lista</span>
      </v-toolbar-title>
    </v-toolbar>
    <!--  -->
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>
