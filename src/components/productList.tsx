import Animated from 'react-native-reanimated';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Product } from '../redux/productListSlice';

export const ProductList = ({products}:{products: Array<Product>}) => {
    return (
        <Animated.ScrollView showsVerticalScrollIndicator={false}
        style={styles.scrollViewStyles}>
            {
            products.map((product: Product) => {
                return (
                    <View style={styles.itemViewStyles} key={`${product.id}View`}>
                        <ImageBackground source={{uri:product.thumbnail}} style={styles.thumbnailStyles}/>
                        <View style={styles.productDetailsViewStyles}>
                            <Text style={styles.productTitleTextStyles}>{product.title}</Text>
                            <Text style={styles.productDescriptionTextStyles}>{product.description}</Text>
                        </View>
                    </View>
                );
            })}
        </Animated.ScrollView>
    );
};

const styles = StyleSheet.create({
    itemViewStyles: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#00000022',
    },
    scrollViewStyles: {
        marginTop: 10,
        flex: 1,
    },
    thumbnailStyles: {
        width: 50,
        height: 50,
        borderRadius: 3,
        flex: 2,
        alignSelf: 'center',
    },
    productDetailsViewStyles: {
        paddingLeft: 10,
        paddingRight: 5,
        flex: 10,
    },
    productTitleTextStyles: {
        fontWeight: 'bold',
    },
    productDescriptionTextStyles: {
        marginTop: 5,
        fontSize: 12,
    },
});
