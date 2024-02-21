<!-- ButtonCounter.vue -->

<template>
  <div>
    <form @submit.prevent="onFormSubmit">
      <button @click="incrementCounter">Click me!</button>
    </form>
    <p>Button clicked {{ counter }} times.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementCounter() {
      this.counter++;
    },
    onFormSubmit() {
      // You can handle form submission logic here, or leave it empty
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here if needed */
</style>
