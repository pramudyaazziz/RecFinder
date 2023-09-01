<script setup>
    import HeaderApp from '../components/Header.vue';
    import { defineProps } from 'vue';
    import { useNavigationStore } from '../stores/navigation';

    const { setNavigation } = useNavigationStore();

    setNavigation(false);

    const props = defineProps({
        food: String
    });
</script>

<template>
    <div class="container">
            <header-app></header-app>
    </div>
</template>