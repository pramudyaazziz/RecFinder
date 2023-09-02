import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useFindByCategoryStore = defineStore('foodCategory', () => {
  let _foodCategory = ref(null);

  const findFoodByCategory = async (category) => {
     const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

     try {
        const response = await axios.get(url);
        if (response.data.meals == null) {
            return _foodCategory.value = null;
        }

        _foodCategory.value = response.data.meals.map((data) => {
            return formatData(data)
        });
        
     } catch (error) {
         console.error('Error fetching food data:', error);
     }
  };

  const getFoodByCategory = () => {
     return _foodCategory.value
  }

  const formatData = (data) => {
    return {
        id: data.idMeal,
        area: data.strArea ?? null,
        title: data.strMeal,
        img: data.strMealThumb
    }
  }

  return {
    getFoodByCategory,
    findFoodByCategory
  };
});
