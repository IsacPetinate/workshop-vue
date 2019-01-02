<template>
  <v-app>
    <v-toolbar color="primary" dark>
      <v-toolbar-title>
        <v-chip color="secondary" text-color="white">
          <v-avatar>
            <v-icon>check_circle</v-icon>
          </v-avatar>
          Minha Lista
        </v-chip>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
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
