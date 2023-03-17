<template>
  <div>
    <input v-model="message" placeholder="edit me" />
    <button @click="handleClick">确定</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    };
  },
  methods: {
    handleClick() {
      this.$router.push({ path: '/chat', query: { message: this.message } });
    },
  },
};
</script>
