<template>
  <v-app>
    <v-toolbar color="indigo" dark>
      <v-toolbar-title>
        <v-avatar>
          <v-icon>speaker_notes</v-icon>
        </v-avatar>
        Minha Lista
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
