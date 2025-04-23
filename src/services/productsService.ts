import { Product } from '../redux/productListSlice';
import axios from 'axios';

export interface ProductFromAPI {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    images: string[];
    category: string;
}

export interface ProductAPIResponse {
    products: Array<Product>,
    categories: Array<string>,
}

const PRODUCT_FETCH_LIMIT = 50;

export class ProductsService {
    static #instance: ProductsService;

    public static get instance(): ProductsService {
        if( !ProductsService.#instance) {
            ProductsService.#instance = new ProductsService();
        }
        return ProductsService.#instance;
    }

    public async fetchProducts():Promise<ProductAPIResponse> {
        try {
            const response = await axios(
                {
                    method: 'GET',
                    url: 'https://dummyjson.com/products?limit=' + PRODUCT_FETCH_LIMIT,
                    timeout: 30000,
                }
            );
            return this.convertToAppStructure(response?.data);
        } catch (error) {
            console.error('Error fetching products:  ', error);
            throw error;
        }
    }

    private convertToAppStructure( jsonData:any):ProductAPIResponse {
        const products = jsonData?.products as Array<ProductFromAPI>;
        const categories = new Set<string>();
        const productsForApp = products.map(productFromApi => {
            categories.add(productFromApi.category);
            return {
                id: productFromApi.id,
                title: productFromApi.title,
                description: productFromApi.description,
                thumbnail: productFromApi.thumbnail,
                image: productFromApi.images[0],
                category: productFromApi.category,
            };
        });
        return {
            products: productsForApp,
            categories: Array.from(categories.values()),
        };
    }
}
