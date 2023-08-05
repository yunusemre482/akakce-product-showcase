import axios, { AxiosResponse } from 'axios';
import type { IProductListItem } from '~/shared/types/ProductListItem.interface';
import type { IProductDetail } from '~/shared/types/ProductDetail.interface';


const BASE_URL = 'https://mocki.io/v1';  // API base url (should be in .env file) 


type ProductListResponse = {
    result: {
        nextUrl?: string,
        products: IProductListItem[];
        horizontalProducts: IProductListItem[];
    }
};


type ProductDetailResponse = {
    result: IProductDetail;
}


const API = () => {
    const getProductList = async (): Promise<ProductListResponse> => {
        try {
            const response: AxiosResponse<ProductListResponse> = await axios.get(`${BASE_URL}/59906f35-d5d5-40f7-8d44-53fd26eb3a05`);
            return response.data;
        } catch (error) {
            throw new Error('Can\'t get product list');
        }
    };

    const getProductDetail = async (productId: number): Promise<ProductDetailResponse> => {
        try {
            const response: AxiosResponse<ProductDetailResponse> = await axios.get(`${BASE_URL}/1a1fb542-22d1-4919-914a-750114879775?code=${productId}`);
            return response.data;
        } catch (error) {
            throw new Error('Can\'t get product detail');
        }
    };


    return {
        getProductList,
        getProductDetail,
    }
};

export default API;