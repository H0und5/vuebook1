<template>
  <div>
    <SignUpForm title="Gucci" />
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
