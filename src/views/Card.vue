<template>
  <div>
    <h1>Message is: {{ message }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: '',
    },
  },
};
</script>
