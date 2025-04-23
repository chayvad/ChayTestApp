import { RootState } from './store';

export const selectIsFilterDrawerOpen = (state: RootState) => state.filters.isFilterDrawerOpen;
export const selectSelectedCatergories = (State: RootState) => State.filters.selectedCategories;
export const selectAllCategories = (state: RootState) =>  state.filters.categories;
