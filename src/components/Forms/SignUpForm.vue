<template>
  <form class="signUpForm">
    <h3>{{ title }}</h3>
    <p>{{ explanation }}</p>

    <label>Email: </label>
    <input
      placeholder="Enter your email here"
      type="email"
      required
      v-model="email"
    />

    <br /><br />

    <label>Password: </label>
    <input
      placeholder="Enter a new password here"
      type="password"
      required
      v-model="password"
    />

    <button @click.prevent="submitFormHandler" type="submit">Sign Up</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SignUpForm",
  components: {},
  props: ["title", "explanation"],

  setup() {
    const email = ref("");
    const password = ref("");

    const submitFormHandler = () => {
      console.log(
        "Your email is: " + email.value + "Your password was: " + password.value
      );
    };

    return {
      email,
      password,
      submitFormHandler,
    };
  },
});
</script>

<style>
/* .signUpForm {} */
</style>
