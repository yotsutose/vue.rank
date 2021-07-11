import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
import router from './router'

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyB3-H56BndEn2DY2oQCe7UN5qkQAiehs88",
  authDomain: "kdghacks-team-d.firebaseapp.com",
  databaseURL: "https://kdghacks-team-d-default-rtdb.firebaseio.com",
  projectId: "kdghacks-team-d",
  storageBucket: "kdghacks-team-d.appspot.com",
  messagingSenderId: "868270110711",
  appId: "1:868270110711:web:d33b399fe08bf8625020f2",
  measurementId: "G-NLHDTJDZ09"
};

firebase.initializeApp(config)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
