<script setup>
import Logo from './Logo.vue';
import Navigation from './Navigation.vue';

import { useNavigationStore } from '../stores/navigation';

const { getNavigation } = useNavigationStore();

const navigation = getNavigation();
</script>

<template>
    <header>
        <logo></logo>
        <navigation v-if="navigation"></navigation>
    </header>
</template>
