
import React, { useEffect, useState } from 'react'
import useApi from '~/services/api';

export interface Product {
    code: number;
    imageUrl: string;
    name: string;
    dropRati?: number;
    price: number;
    countOfPrices?: number;
    followCount?: number;
}

type Props = {

}

const Products = ({ }: Props) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [horizontalProducts, setHorizontalProducts] = useState<Product[]>([]);

    const { getProductList } = useApi();

    const getProducts = async () => {
        const response = await getProductList();

        console.log(response);
    }



    useEffect(() => {
        getProducts();
    }, [])


    return (
        <div>Products</div>
    )
}

export default Products