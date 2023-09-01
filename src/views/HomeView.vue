<script setup>
import HeaderApp from '../components/Header.vue';
import SearchInfo from '../components/SearchInfo.vue';
import Card from '../components/Card.vue';
import { useSearchStore } from '../stores/search';

const { setSearch } = useSearchStore();

setSearch(true);
</script>

<template>
  <div class="container">
    <header-app></header-app>
    <search-info></search-info>
    <div class="row g-3">
      <card></card>
      <card></card>
      <card></card>
      <card></card>
      <card></card>
    </div>
  </div> 
</template>

<style>
  .card {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .card-body {
    flex-grow: 1;
  }
</style>