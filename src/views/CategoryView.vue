<script setup>
import HeaderApp from '../components/Header.vue';
import FoodCategory from '../components/FoodCategory.vue';
import { useSearchStore } from '../stores/search';

const { setSearch } = useSearchStore();

setSearch(false);
</script>

<template>
  <div class="container">
    <header-app></header-app>
    <div class="row">
        <food-category></food-category>
        <food-category></food-category>
        <food-category></food-category>
        <food-category></food-category>
        <food-category></food-category>
        <food-category></food-category>
        <food-category></food-category>
    </div>
  </div> 
</template>