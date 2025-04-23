import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Product } from './productListSlice';

export const selectProducts = createSelector(
    (state) => state.productList.products,
    (state) => state.filters.selectedCategories,
    (products, selectedCategories) => {
        return products.filter((product: Product) => {
            return selectedCategories.indexOf(product.category) !== -1;
        });
    });
export const selectIsFetchingProducts = (state: RootState) => state.productList.isLoading;
export const selectCategories = (state: RootState) => state.productList.categories;
