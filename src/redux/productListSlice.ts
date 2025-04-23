import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProducts } from './thunks';

export interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    thumbnail: string;
    category: string;
}

export interface ProductsListState {
    products: Array<Product>,
    isLoading: boolean,
    selectedProductId: number,
    categories: Array<string>,
}

export const initialState: ProductsListState = {
    products: [],
    isLoading: false,
    selectedProductId: -1,
    categories: [],
};

export const productsListSlice = createSlice({
    initialState,
    reducers: {
        addProducts: (state, action: PayloadAction<Array<Product>>) => {
            state.products = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading  = action.payload;
        },
        setSelectedProduct: (state, action: PayloadAction<number>) => {
            state.selectedProductId = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload.products;
            state.categories = action.payload.categories;
            state.isLoading = false;
        })
        .addCase(getProducts.pending, (state, _action) => {
            state.isLoading = true;
        })
        .addCase(getProducts.rejected, (state, _action) => {
            state.isLoading = false;
        });
    },
    name: 'ProductListState',
});

export const { addProducts, setLoading, setSelectedProduct} = productsListSlice.actions;

export default productsListSlice.reducer;
