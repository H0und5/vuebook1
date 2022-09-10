<template>
  <div>
    <SignUpForm title="Gucci" place-hold="Testing" />
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
