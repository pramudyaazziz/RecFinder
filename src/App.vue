<script setup>
import { RouterView, useRouter } from 'vue-router'


const router = useRouter();

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
</script>

<template>
  <RouterView />
</template>