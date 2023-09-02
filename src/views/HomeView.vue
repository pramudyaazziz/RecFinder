<script setup>
import HeaderApp from '../components/Header.vue';
import SearchInfo from '../components/SearchInfo.vue';
import Card from '../components/CardFood.vue';
import { useSearchStore } from '../stores/search';
import { useNavigationStore } from '../stores/navigation';
import { useFindByKeywordStore } from '../stores/findByKeyword';
import { useKeywordStore } from '../stores/keyword';
import { ref, watchEffect  } from 'vue';

const { setSearch } = useSearchStore();
const { setNavigation } = useNavigationStore();
const { getFood } = useFindByKeywordStore();
const { getKeyword } = useKeywordStore();

setSearch(true);
setNavigation(true);

const foods = ref(getFood());
const keyword = ref(getKeyword());

watchEffect (() => {
  foods.value = getFood();
});

watchEffect (() => {
  keyword.value = getKeyword();
})

</script>

<template>
  <div class="container pb-3">
    <header-app></header-app>
    <search-info v-if="keyword" text="Search Food by Keyword" :keyword="keyword" :result="foods ? foods.length : 0" ></search-info>
    <div class="row g-3">
      <card v-for="food in foods" :data="food"></card>
    </div>
    <h5 v-if="!foods && !keyword" class="text-center text-secondary mt-5">Try to search food</h5>
  </div> 
</template>