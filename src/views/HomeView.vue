<template>
  <div>
    <SignUpForm
      title="Sign Up for Bookface"
      explanation="This is an explanation for Bookface"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SignUpForm from "../components/Forms/SignUpForm.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    SignUpForm,
  },
});
</script>
