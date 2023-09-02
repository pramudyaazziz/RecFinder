<script setup>
    import HeaderApp from '../components/Header.vue';
    import HeaderRecipe from '../components/HeaderRecipe.vue';
    import CategorySection from '../components/Category.vue';
    import IngredientSection from '../components/Ingredient.vue';
    import TagsSection from '../components/Tags.vue';
    import RecipeImage from '../components/RecipeThumb.vue';
    import InstructionSection from '../components/Instruction.vue';
    import { useNavigationStore } from '../stores/navigation';
    import { useRecipeStore } from '../stores/recipe';
    import { ref, defineProps, watchEffect } from 'vue';

    const { setNavigation } = useNavigationStore();
    const { findRecipe, getRecipe } = useRecipeStore();

    setNavigation(false);

    const props = defineProps({
        food: String
    });

    const recipe = ref(getRecipe());

    findRecipe(props.food)

    watchEffect(() => {
        recipe.value = getRecipe();
    });
</script>

<template>
    <div class="container pb-3">
        <header-app></header-app>
        <header-recipe v-if="recipe && recipe.title" :title-food="recipe.title" :area-food="recipe.area"></header-recipe>
        
        <div class="my-3 text-secondary row">
            <div class="col-md-5 py-2">
                <recipe-image v-if="recipe && recipe.img" :img="recipe.img"></recipe-image>
            </div>
            <div class="col-md-7 py-2">
                <category-section v-if="recipe && recipe.category" :category="recipe.category"></category-section>
                <tags-section v-if="recipe && recipe.tags" :tags="recipe.tags"></tags-section>
                <ingredient-section  v-if="recipe && recipe.ingredients" :ingredients="recipe.ingredients"></ingredient-section>
            </div>
        </div>

        <div class="text-secondary">
            <instruction-section v-if="recipe && recipe.instruction && recipe.youtube" :instruction="recipe.instruction" :youtube="recipe.youtube"></instruction-section>
        </div>
    </div>
</template>