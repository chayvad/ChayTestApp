import { selectProducts } from '../prodctListSelector';

describe('Product List Selector', () => {
    it('should get filtered product list', () => {
        const state = {
            productList: {
                products: [],
            },
            filters: {
                selectedCategories: [],
            },
        };

        const products = selectProducts(state);

        expect(products.length).toBe(0);
    });
});
