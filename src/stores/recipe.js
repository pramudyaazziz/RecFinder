import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useRecipeStore = defineStore('recipe', () => {
  let _recipe = ref(null);

  const findRecipe = async (id) => {
     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

     try {
        const response = await axios.get(url);
        if (response.data.meals == null) {
            return _recipe.value = null;
        }

        _recipe.value = formatData(response.data.meals[0])
        
     } catch (error) {
         console.error('Error fetching food data:', error);
     }
  };

  const getRecipe = () => {
     return _recipe.value
  }

  const formatData = (data) => {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;

      if (data[ingredientKey] && data[ingredientKey].trim() !== "") {
        ingredients.push(data[ingredientKey] + ' -' + data[measureKey])
      }
    }

    let formated = {
        id: data.idMeal,
        area: data.strArea ?? null,
        title: data.strMeal ?? null,
        img: data.strMealThumb ?? null,
        category: data.strCategory ?? null,
        youtube: data.strYoutube ?? null,
        instruction: data.strInstructions ?? null,
        tags: data.strTags ? data.strTags.split(',') : null,
        ingredients

    }
    
    return formated;
  }

  return {
    findRecipe,
    getRecipe
  };
});
