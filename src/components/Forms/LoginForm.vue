<template>
  <form>
    <h2>{{ title }}</h2>
    <p>{{ explanation }}</p>

    <label>Email: </label>
    <input placeholder="Email" required type="text" v-model="email" />

    <br /><br />

    <label>Password: </label>
    <input placeholder="Password" required type="password" />

    <br /><br />

    <button @click.prevent="signInHandler">Sign in</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LoginForm",
  components: {},
  props: ["title", "explanation"],
  setup() {
    const email = ref("");
    const password = ref("");

    const signInHandler = () => {
      console.log("Success!");

      email.value = "";
      password.value = "";
    };

    return {
      email,
      password,
      signInHandler,
    };
  },
});
</script>
