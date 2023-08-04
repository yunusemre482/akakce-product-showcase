import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useApi from '~/services/api';
export interface ProductDetail {
    mkName: string;
    productName: string;
    badge: string;
    rating: number;
    imageUrl: string;
    storageOptions: string[];
    countOfPrices: number;
    price: number;
    freeShipping: boolean;
    lastUpdate: string;
}

type Props = {}

const Product = (props: Props) => {

    // the parameter is derived from the name of the file
    const { code } = useParams();

    const [product, setProduct] = useState<ProductDetail | null>();
    const { getProductDetail } = useApi();

    const getProduct = async () => {
        // convert string to number 

        const pCode = Number(code);
        const response = await getProductDetail(pCode);
        console.log(response);
    }

    useEffect(() => {
        /* get product detail */
        getProduct();

        return () => {
            console.log('unmount');
            setProduct(null);
        }
    }, [code])



    return (
        <div>Product</div>
    )
}

export default Product