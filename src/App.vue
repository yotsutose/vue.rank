<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    > 
      <div class="d-flex align-center">
        <h1>東京オリンピック2021</h1>
      </div>

      <v-spacer></v-spacer>

      <router-link to="/">
        <v-btn
          elevation="2"
        >Home</v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
};
</script>
