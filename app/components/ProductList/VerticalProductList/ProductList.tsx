import React from 'react';
import VerticalProductListItem from './ProductListItem';
import Pagination from '../Pagination';
import Skeleton from './Skeleton';

interface Product {
    code: number;
    price: number;
    imageUrl: string;
    name: string;
    dropRatio?: number;
    countOfPrices?: number;
    followCount?: number;
}

interface VerticalProductListProps {
    products: Product[];
}

const VerticalProductList: React.FC<VerticalProductListProps> = ({ products }) => {
    return (
        <ul className='grid grid-cols-2 gap-3 p-2 flex-3'>
            {products.length === 0 &&
                Array.from({ length: 6 }).map((_, index) => <Skeleton  key={index} />)}
            {products.map((product) => (
                <VerticalProductListItem key={product.code} {...product} />
            ))}
        </ul>
    );
};

export default VerticalProductList;