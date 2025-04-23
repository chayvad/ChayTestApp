import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductsService } from '../services/productsService';

export const getProducts = createAsyncThunk(
    'products/fetch',
    async () => {
        const response = await ProductsService.instance.fetchProducts();
        return response;
    }
);
