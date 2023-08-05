import React from 'react';
import ProductPrice from './ProductPrice';
import { MdArrowForwardIos } from 'react-icons/md';

interface ProductPriceSectionProps {
    price: number;
    countOfPrices?: number;
}

const ProductPriceSection: React.FC<ProductPriceSectionProps> = ({ price, countOfPrices }) => {
    return (
        <React.Fragment>
            <ProductPrice price={price} />
            {countOfPrices && countOfPrices > 0 && (
                <span className='text-[#9ba7b7] font-light text-[14px]'>
                    {countOfPrices} satıcı <MdArrowForwardIos className='inline-block text-[#9ba7b7] text-[12px] ml-1 mb-[2px]' />
                </span>
            )}
        </React.Fragment>
    );
};

export default ProductPriceSection;