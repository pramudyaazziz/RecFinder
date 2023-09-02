import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useFindByKeywordStore = defineStore('food', () => {
  let _food = ref(null);

  const findFood = async (keyword) => {
     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`;

     try {
        const response = await axios.get(url);
        if (response.data.meals == null) {
            return _food.value = null;
        }

        _food.value = response.data.meals.map((data) => {
            return formatData(data)
        });
        
     } catch (error) {
         console.error('Error fetching food data:', error);
     }
  };

  const getFood = () => {
     return _food.value
  }

  const formatData = (data) => {
    return {
        id: data.idMeal,
        area: data.strArea,
        title: data.strMeal,
        img: data.strMealThumb
    }
  }

  return {
    getFood,
    findFood
  };
});
