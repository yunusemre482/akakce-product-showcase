import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import useApi from '~/services/api';
import type { IProductDetail } from '~/shared/types/ProductDetail.interface';
import Skeleton from '~/components/ProductDetail/Skeleton';
import ProductDetails from '~/components/ProductDetail/ProductDetails';
import ProductImage from '~/components/ProductDetail/ProductImage';
import ProductPrice from '~/components/ProductDetail/ProductPrice';
import StorageOptions from '~/components/ProductDetail/ProductStorageOptions';
import FreeShipping from '~/components/ProductDetail/FreeShipping';
import LastUpdate from '~/components/ProductDetail/LastUpdate';
import Divider from '~/components/ProductDetail/Divider';
type Props = {}

const Product = (props: Props) => {

    // the parameter is derived from the name of the file
    const { code } = useParams();

    const [product, setProduct] = useState<IProductDetail | null>();
    const { getProductDetail } = useApi();

    const getProduct = async () => {
        // convert string to number 

        const pCode = Number(code);
        const response = await getProductDetail(pCode);

        if (response) {
            const { result } = response;
            setProduct(result);
        }

    }

    useEffect(() => {
        /* get product detail */
        getProduct();

        return () => {
            console.log('unmount');
            setProduct(null);
        }
    }, [code])

    if (!product) return (<Skeleton />)


    return (
        <div className='flex  flex-col w-full md:w-3/4 lg:w-[clamp(30rem,40rem,100%)]  shadow  p-5 bg-slate-100 min-h-full h-fit'>
            <ProductDetails mkName={product.mkName} productName={product.productName} badge={product.badge} rating={product.rating} />

            <Divider />

            <ProductImage imageUrl={product.imageUrl} alt={product.productName} />

            <Divider />

            <StorageOptions storageOptions={product.storageOptions} />
            <ProductPrice price={product.price} countOfPrices={product.countOfPrices} />
            {product.freeShipping && <FreeShipping />}
            <LastUpdate lastUpdate={product.lastUpdate} />
        </div>
    )
}

export default Product