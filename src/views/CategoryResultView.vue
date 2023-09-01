<script setup>
import HeaderApp from '../components/Header.vue';
import SearchInfo from '../components/SearchInfo.vue';
import Card from '../components/CardFood.vue';
import { useNavigationStore } from '../stores/navigation';

const { setNavigation } = useNavigationStore();

setNavigation(false);
</script>

<template>
    <div class="container">
        <header-app></header-app>
        <search-info text="Searc Food by Category"></search-info>
        <div class="row g-3">
            <card></card>
            <card></card>
            <card></card>
            <card></card>
            <card></card>
        </div>
    </div>
</template>