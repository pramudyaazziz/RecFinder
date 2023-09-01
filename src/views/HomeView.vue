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

const data = {
    area: 'Japanese',
    title: 'Teriyaki Chicken Casserole<'
}
</script>

<template>
  <div class="container pb-5">
    <header-app></header-app>
    <search-info text="Searc Food by Keyword"></search-info>
    <div class="row g-3">
      <card :data="data"></card>
      <card :data="data"></card>
      <card :data="data"></card>
      <card :data="data"></card>
      <card :data="data"></card>
    </div>
  </div> 
</template>