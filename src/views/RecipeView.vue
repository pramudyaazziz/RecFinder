<script setup>
    import HeaderApp from '../components/Header.vue';
    import HeaderRecipe from '../components/HeaderRecipe.vue';
    import CategorySection from '../components/Category.vue';
    import IngredientSection from '../components/Ingredient.vue';
    import TagsSection from '../components/Tags.vue';
    import RecipeImage from '../components/RecipeThumb.vue';
    import InstructionSection from '../components/Instruction.vue';
    import { useNavigationStore } from '../stores/navigation';

    const { setNavigation } = useNavigationStore();

    setNavigation(false);

    const props = defineProps({
        food: String
    });

    const data = {
        area: 'Japanese',
        title: 'Teriyaki Chicken Casserole',
        img: 'https://th.bing.com/th/id/OIP.10YjkNVb-H5Or0tqajUaVwAAAA?pid=ImgDet&rs=1',
        category: 'Chicken',
        tags: [
            'Meat',
            'Casserole'
        ],
        ingredients: [
            'soy sauce - 3/4 cup',
            'rice - 1 coal',
            'soy sauce - 3/4 cup',
            'rice - 1 coal',
            'soy sauce - 3/4 cup',
            'rice - 1 coal',
            'soy sauce - 3/4 cup',
            'rice - 1 coal',
        ],
        youtube: 'https://www.youtube.com/watch?v=4aZr5hZXP_s',
        instruction: 'Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\r\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\r\n*Meanwhile, steam or cook the vegetables according to package directions.\r\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!'
    }
</script>

<template>
    <div class="container pb-3">
        <header-app></header-app>
        <header-recipe :title-food="data.title" :area-food="data.area"></header-recipe>
        
        <div class="my-3 text-secondary row">
            <div class="col-md-5 py-2">
                <recipe-image :img="data.img"></recipe-image>
            </div>
            <div class="col-md-7 py-2">
                <category-section :category="data.category"></category-section>
                <tags-section :tags="data.tags"></tags-section>
                <ingredient-section :ingredients="data.ingredients"></ingredient-section>
            </div>
        </div>

        <div class="text-secondary">
            <instruction-section :instruction="data.instruction" :youtube="data.youtube"></instruction-section>
        </div>
    </div>
</template>