import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useCategoryStore = defineStore('category', () => {
  const _category = ref(null);

  const findListCategory = async () => {
     const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

     try {
        const response = await axios.get(url);
        if (response.data.categories == null) {
            _category.value = null;
        } else {
            _category.value = response.data.categories.map((data) => {
                return formatData(data);
            });
        }
     } catch (error) {
         console.error('Error fetching food data:', error);
     }
  };

  const getListCategory = () => {
     return _category.value
  }

  const formatData = (data) => {
    return {
        name: data.strCategory,
        img: data.strCategoryThumb,
    }
  }

  findListCategory();

  return {
    getListCategory,
    findListCategory
  };
});

