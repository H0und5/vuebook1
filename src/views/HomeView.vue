<template>
  <div>
    <SignUpForm
      title="Sign Up for Bookface"
      explanation="This is an explanation for Bookface"
    />
    <br /><br /><br /><br />
    <LoginForm
      title="Sign In to Bookface"
      explanation="Only for existing users"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SignUpForm from "../components/Forms/SignUpForm.vue";
import LoginForm from "../components/Forms/LoginForm.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    SignUpForm,
    LoginForm,
  },
});
</script>
