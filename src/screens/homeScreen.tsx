import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { getProducts } from '../redux/thunks';
import { selectIsFetchingProducts, selectProducts } from '../redux/prodctListSelector';
import { ProductList } from '../components/productList';
import { ProductListHeader } from '../components/productListHeader';
import { FilterModal } from '../components/filterModal';
import { selectIsFilterDrawerOpen } from '../redux/filtersSelectors';

export const HomeScreen = () => {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(selectIsFetchingProducts);
    const products = useAppSelector(selectProducts);
    const isFilterDrawerOpen = useAppSelector(selectIsFilterDrawerOpen);

    useEffect(() => {
        dispatch(getProducts());
    },[dispatch]);

    return (
        <SafeAreaView style={styles.containerStyle}>
            <View style={styles.productViewContainer}>
                <View style={styles.headerWrapper}>
                    <ProductListHeader totalProducts={products.length}/>
                </View>
                {isLoading ? <ActivityIndicator size="small" color="#000099" /> : <ProductList products={products}/>}
            </View>
            {isFilterDrawerOpen && <FilterModal />}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    productViewContainer: {
        flex: 1,
    },
    headerWrapper: {
        height: 40,
    },
});
