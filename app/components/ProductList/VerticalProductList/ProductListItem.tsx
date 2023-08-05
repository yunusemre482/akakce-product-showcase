import React from 'react';

import ProductImage from '../common/ProductImage';
import ProductPriceSection from '../common/ProductPriceSection';
import ProductTitle from '../common/ProductTitle';
import DropRatio from '../common/DropRatio';

interface VerticalProductListItemProps {
    code: number;
    price: number;
    imageUrl: string;
    name: string;
    dropRatio?: number;
    countOfPrices?: number;
    followCount?: number;
}

const VerticalProductListItem: React.FC<VerticalProductListItemProps> = ({
    code,
    price,
    imageUrl,
    name,
    dropRatio,
    countOfPrices,
    followCount,
}) => {
    return (
        <li className='flex flex-col items-start justify-start bg-white p-4 rounded-md gap-[6px] max-w-[16rem] relative'>
            <ProductImage imageUrl={imageUrl} name={name} />
            <ProductTitle name={name} />
            <ProductPriceSection price={price} countOfPrices={countOfPrices} />
            {followCount && <b className='text-[#70747a] font-medium'>{followCount}+ takip</b>}
            <DropRatio dropRatio={dropRatio} productType='vertical' />
        </li>
    );
};

export default VerticalProductListItem;