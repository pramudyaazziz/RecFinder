import { defineStore } from 'pinia';

export const useSearchStore = defineStore('search', () => {
  let _search = true;

  const getSearch = () => {
    return _search;
  };

  const setSearch = (value) => {
    _search = value;
  };

  return {
    getSearch,
    setSearch,
  };
});
