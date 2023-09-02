<script setup>
  import HeaderApp from '../components/Header.vue';
  import FoodCategory from '../components/FoodCategory.vue';
  import { useSearchStore } from '../stores/search';
  import { useNavigationStore } from '../stores/navigation';
  import { useCategoryStore } from '../stores/category';
  import { ref, watchEffect } from 'vue';

  const { setSearch } = useSearchStore();
  const { setNavigation } = useNavigationStore();
  const { getListCategory } = useCategoryStore();

  const categories = ref(null);

  setSearch(false);
  setNavigation(true);

  watchEffect(() => {
    categories.value = getListCategory();
  });
</script>

<template>
  <div class="container pb-3">
    <header-app></header-app>
    <div class="row">
        <food-category v-if="categories" v-for="category in categories" :category="category"></food-category>
    </div>
  </div> 
</template>