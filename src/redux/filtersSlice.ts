import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProducts } from './thunks';

export interface FiltersState {
    isFilterDrawerOpen: boolean,
    selectedCategories: Array<string>,
    categories: Array<string>,
}

export const initialState: FiltersState = {
    categories: [],
    selectedCategories: [],
    isFilterDrawerOpen: false,
};

export const filtersSlice = createSlice({
    initialState,
    reducers: {
        setIsFilterDrawerOpen: (state, action: PayloadAction<boolean>) => {
            state.isFilterDrawerOpen  = action.payload;
        },
        setSelectedCategories: (state, action: PayloadAction<Array<string>>) => {
            state.selectedCategories = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.categories = action.payload.categories;
            state.selectedCategories = action.payload.categories;
        });
    },
    name: 'FiltersSlice',
});

export const { setIsFilterDrawerOpen, setSelectedCategories} = filtersSlice.actions;

export default filtersSlice.reducer;
