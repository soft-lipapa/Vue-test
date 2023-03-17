<template>
  <div>
    <card :message="$route.query.message" />
  </div>
</template>

<script>
import Card from '@/views/Card.vue';

export default {
  components: {
    Card,
  },
};
</script>
