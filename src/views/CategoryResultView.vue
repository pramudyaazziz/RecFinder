<script setup>
    import HeaderApp from '../components/Header.vue';
    import SearchInfo from '../components/SearchInfo.vue';
    import Card from '../components/CardFood.vue';
    import BackButton from '../components/BackButton.vue';
    import { useNavigationStore } from '../stores/navigation';
    import { useFindByCategoryStore } from '../stores/findByCategory';
    import { defineProps, ref, watchEffect } from 'vue';

    const { setNavigation } = useNavigationStore();
    const { getFoodByCategory, findFoodByCategory } = useFindByCategoryStore();


    const props = defineProps({
        category: String
    });

    const foods = ref(getFoodByCategory());

    findFoodByCategory(props.category)

    watchEffect(() => {
        foods.value = getFoodByCategory();
    });

    setNavigation(false);
</script>

<template>
    <div class="container pb-3">
        <!-- <p class="text-white">{{ foods }}</p> -->
        <header-app></header-app>
        <div class="text-end">
            <back-button></back-button>
        </div>
        <search-info text="Search Food by Category" :keyword="category" :result="foods ? foods.length : 0"></search-info>
        <div class="row g-3">
            <card v-if="foods" v-for="food in foods" :data="food"></card>
        </div>
    </div>
</template>