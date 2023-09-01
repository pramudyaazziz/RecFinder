import { defineStore } from 'pinia';

export const useNavigationStore = defineStore('navigation', () => {
  let _navigation = true;

  const getNavigation = () => {
    return _navigation;
  };

  const setNavigation = (value) => {
    _navigation = value;
  };

  return {
    getNavigation,
    setNavigation,
  };
});
