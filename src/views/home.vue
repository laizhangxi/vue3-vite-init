<template>
  <div @click="toPage" class="f-c-c">去about页面</div>
</template>

<script setup lang="ts">
import router from '@/router';

const toPage = () => {
  router.push({name: 'about'})
}
</script>

<style scoped></style>
