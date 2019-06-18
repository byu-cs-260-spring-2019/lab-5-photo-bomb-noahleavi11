import Vue from 'vue';
import Vuex from "vuex";
import firebase from 'firebase';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    created: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setCreated(state, date) {
      state.created = date;
      console.log(date);
    }
  },
  actions: {
    async getUser(context) {
      try {
        let response = await firebase.auth().currentUser;
        context.commit('setUser', response.user);
        console.log("get user initiated");
        store.dispatch("getCreation", {
          individual: user,
        });
        return "";
      } catch (error) {
        return "";
      }
    },
    // async getCreation(context, data) {
    //   console.log("getCreation called");
    //   try {
    //     console.log("inside try statement");
    //     console.log(data.individual);
    //     console.log();
    //     if (state.user) {
    //       let response = await axios.get('/api/users/' + state.user.email);
    //       console.log(response);
    //       context.commit('setCreated', response.data.created);
    //       return "completed";
    //     }
    //   } catch (e) {
    //     return "failed";
    //   }
    // },
    async addFavWord(context, data) {
      try{
        console.log("this is my dog: ", data.word);
        let myapi = await axios.post("/api/users", data);
        return "";
      } catch (error) {
        return error.message;
      }
    },
    async getData(context) {
      try{
        let myapi = await axios.get("/api/users");
        return myapi;
      } catch (error) {
        return(error);
      }
    },
    async register(context, data) {
      try {
        let response = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
        context.commit('setUser', response.data);

        return "";
      } catch (error) {
        return error.message;
      }
    },
    async login(context, data) {
      try {
        let response = await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
        context.commit('setUser', response.user);
        console.log("in login action");
        return "";
      } catch (error) {
        return error.message;
      }
    },
    async logout(context) {
      try {
        await firebase.auth().signOut();
        context.commit('setUser', null);
        return "";
      } catch (error) {
        return error.message;
      }
    },
  }
})
