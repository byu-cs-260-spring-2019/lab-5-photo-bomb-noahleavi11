<template>
<div>
  <div v-if="user" class="header">
    <div>
      <h2>{{user.email}}</h2>
    </div>
    <div class="user-info">
      <div v-for="user in users">
        {{user}}
      </div>
    </div>
    <div class="button">
      <p><button @click="logout" class="pure-button pure-button-primary">Logout</button></p>
    </div>
  </div>
  <div v-else>
    <router-link to="/register" class="pure-button">Register</router-link> or
    <router-link to="/login" class="pure-button">Login</router-link>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'mypage',
  data() {
    return {
      users: null,
    }
  },
  created() {
    this.$store.dispatch("getUser");
    this.users = this.$store.dispatch("getData");
    // this.$store.dispatch("getCreation");
  },
  // date() {
  //   return {
  //     my_user: null,
  //   }
  // },
  // beforeUpdate() {
  //   this.$store.dispatch("getCreation", {
  //     email: this.my_user
  //   });
  // },
  // data() {
  //   return {
  //     creation: null,
  //   }
  // },
  // date() {
  //   return {
  //     user =
  //   }
  // }
  methods: {
    async logout() {
      try {
        this.error = await this.$store.dispatch("logout");
        // this.user = null;
      } catch (error) {
        console.log(error);
      }
    },
    // async getMyUser() {
    //   try {
    //     let response = await axios.get("/");
    //     this.users = response.data;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
  },
  computed: {
    user() {
      // this.my_user = this.$store.state.user.email;
      return this.$store.state.user;
    }
  }
}
</script>

<style scoped>
.pure-button {
  margin: 0px 20px;
}

.header {
  display: flex;
}

.header .button {
  margin-left: 50px;
  order: 2;
}
</style>
