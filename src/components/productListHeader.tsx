import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setIsFilterDrawerOpen } from '../redux/filtersSlice';

export const ProductListHeader = ({totalProducts}:{totalProducts:number}) => {
    const dispatch = useDispatch();
    return (
        <View style={styles.headerContainerStyles}>
            <Text style={styles.headerTextStyles} testID="product-list-header">
                Products ({totalProducts})
            </Text>
            <TouchableOpacity onPress={() => {
                dispatch(setIsFilterDrawerOpen(true));
            }}>
                <Image source={require('./../assets/icons8-filter.png')} style={styles.filterIconStyles}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainerStyles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingLeft: 10,
        paddingRight: 20,
    },
    headerTextStyles: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#101010',
        textAlign: 'center',
        flex:1,
    },
    filterIconStyles: {
        width: 20,
        height: 20,
    },
});
