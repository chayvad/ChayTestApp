import { ProductsService } from '../productsService';
import moxios from 'moxios';
import * as product from './mockProducts.json';

describe('fetchProducts', () => {
    beforeEach(()=>{
        moxios.install();
    });
    afterEach(()=>{
        moxios.uninstall();
    });

    it('should fetch products from service and transform it to app structure properly', async () => {
        let url;
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({status: 200, response:product});
            url = request.url;
        });
        const results = await ProductsService.instance.fetchProducts();

        expect(url).toBe('https://dummyjson.com/products?limit=50');
        expect(results.products.length).toEqual(2);

    });
});
