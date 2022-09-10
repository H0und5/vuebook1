<template>
  <div>
    <h3>{{ title }}</h3>

    <label>Email: </label>
    <input :placeholder="placeHold" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SignUpForm",
  components: {},
  props: ["title", "placeHold"],
});
</script>
