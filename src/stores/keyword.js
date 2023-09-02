import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useKeywordStore = defineStore('keyword', () => {
  let _keyword = ref(null);

  const getKeyword = () => {
    return _keyword.value;
  };

  const setKeyword = (value) => {
    _keyword.value = value;
  };

  return {
    getKeyword,
    setKeyword,
  };
});
