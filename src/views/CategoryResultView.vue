<script setup>
import HeaderApp from '../components/Header.vue';
import { useNavigationStore } from '../stores/navigation';

const { setNavigation } = useNavigationStore();

setNavigation(false);
</script>

<template>
    <div class="container">
        <header-app></header-app>
    </div>
</template>