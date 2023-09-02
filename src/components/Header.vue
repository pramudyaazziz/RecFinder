<script setup>
import Logo from './Logo.vue';
import Navigation from './Navigation.vue';

import { useNavigationStore } from '../stores/navigation';

const { getNavigation } = useNavigationStore();

const navigation = getNavigation();
</script>

<template>
    <header>
        <div class="d-flex justify-content-center d-md-block">
            <logo></logo>
        </div>
        <navigation v-if="navigation"></navigation>
    </header>
</template>
