<script setup>
import HeaderApp from '../components/Header.vue';
import SearchInfo from '../components/SearchInfo.vue';
import Card from '../components/CardFood.vue';
import BackButton from '../components/BackButton.vue';
import { useNavigationStore } from '../stores/navigation';

const { setNavigation } = useNavigationStore();

setNavigation(false);

const data = {
    area: 'Japanese',
    title: 'Teriyaki Chicken Casserole<'
}
</script>

<template>
    <div class="container pb-5">
        <header-app></header-app>
        <div class="text-end">
            <back-button></back-button>
        </div>
        <search-info text="Searc Food by Category"></search-info>
        <div class="row g-3">
            <card :data="data"></card>
            <card :data="data"></card>
            <card :data="data"></card>
            <card :data="data"></card>
            <card :data="data"></card>
        </div>
    </div>
</template>