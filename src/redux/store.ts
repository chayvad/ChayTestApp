import { configureStore } from '@reduxjs/toolkit';
import productListReducer from './productListSlice';
import filtersReducer from './filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        productList: productListReducer,
        filters: filtersReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
