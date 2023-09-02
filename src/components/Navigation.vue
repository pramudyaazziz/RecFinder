<script setup>
  import { RouterLink } from 'vue-router';
  import { useSearchStore } from '../stores/search';
  import { useFindByKeywordStore } from '../stores/findByKeyword';
  import { useKeywordStore } from '../stores/keyword';
  import { ref } from 'vue';

  const { getSearch } = useSearchStore();
  const { findFood } = useFindByKeywordStore();
  const { setKeyword, getKeyword } = useKeywordStore();

  const search = getSearch();
  const keyword = ref(getKeyword());

  const submit = () => {
    if (keyword.value) {
      setKeyword(keyword.value);
      findFood(keyword.value);
    }
  }
</script>

<template>
  <nav class="row justify-content-between align-items-center">
      <div class="col-md-8 nav-menu">
        <ul class="d-flex gap-5 pt-3 pb-3 ps-0 pe-0 justify-content-md-start justify-content-center">
          <li class="nav-item">
            <router-link to="/" :class="[{'nav-link': true, 'active-menu': search === true, 'text-secondary': search === false}]" aria-current="page" >Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/categories" :class="[{'nav-link': true, 'active-menu': search === false, 'text-secondary': search === true}]">Categories</router-link>
          </li>
        </ul>
      </div>
      <div class="col-md search-bar" v-if="search">
        <form @submit.prevent="submit" class="d-flex" role="search">
          <input class="form-control me-2 bg-black text-white" required v-model="keyword" type="search" placeholder="Search food" aria-label="Search">
          <button class="btn btn-outline-secondary search-button" type="submit">Search</button>
        </form>
      </div>
  </nav>
</template>

<style>
  .nav-item a.nav-link.active-menu {
    font-weight: 700;
    color: white;
  }
  .form-control::placeholder {
      color: gray;
        opacity: 1;
  }

  .form-control:-ms-input-placeholder {
        color: gray;
  }

  .form-control::-ms-input-placeholder {
        color: gray;
  }

  .search-bar div .search-button:hover,
  .search-bar div .search-button:focus {
    background-color: red;
    color: white;
  }
</style>