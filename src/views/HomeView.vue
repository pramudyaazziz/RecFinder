<script setup>
import HeaderApp from '../components/Header.vue';
import SearchInfo from '../components/SearchInfo.vue';
import Card from '../components/CardFood.vue';
import { useSearchStore } from '../stores/search';
import { useNavigationStore } from '../stores/navigation';

const { setSearch } = useSearchStore();
const { setNavigation } = useNavigationStore();

setSearch(true);
setNavigation(true);
</script>

<template>
  <div class="container">
    <header-app></header-app>
    <search-info text="Searc Food by Keyword"></search-info>
    <div class="row g-3">
      <card></card>
      <card></card>
      <card></card>
      <card></card>
      <card></card>
    </div>
  </div> 
</template>