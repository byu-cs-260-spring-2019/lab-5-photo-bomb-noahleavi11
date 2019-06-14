import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from "./store";
import firebase from 'firebase';

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyCrM6pSyE8ajpHqnQeRCsZwIbkBcl6GM10",
  authDomain: "creativeproject-7640a.firebaseapp.com",
  databaseURL: "https://creativeproject-7640a.firebaseio.com",
  projectId: "creativeproject-7640a",
  storageBucket: "creativeproject-7640a.appspot.com",
  messagingSenderId: "540707919518",
  appId: "1:540707919518:web:299ac83b6ab84b3e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

firebase.auth().onAuthStateChanged(user => {
  if(user){
    store.commit('setUser',user);
  }
  else {
    store.commit('setUser',null);
  }
});
