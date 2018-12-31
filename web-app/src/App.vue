<template>
  <v-app>
    <v-toolbar dark app>
      <v-toolbar-title class="headline text-uppercase">
        
        <span class="font-weight-light">CheckList</span>
      </v-toolbar-title>
    </v-toolbar>

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
