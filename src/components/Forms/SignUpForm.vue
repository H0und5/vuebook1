<template>
  <form class="signUpForm">
    <h3>{{ title }}</h3>
    <p>{{ explanation }}</p>

    <label>Email: </label>
    <input placeholder="Email" v-model="email" type="text" required />

    <br /><br />

    <label>Password: </label>
    <input placeholder="Password" type="password" required v-model="password" />

    <button @click.prevent="submitFormHandler" type="submit">Sign Up</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import router from "@/router";

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

      createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
          router.push("/dashboard");
          console.log("Success!" + data);
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });

      email.value = "";
      password.value = "";
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
