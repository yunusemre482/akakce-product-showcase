import React from 'react';
import { motion } from 'framer-motion';

import ProductImage from '../common/ProductImage';
import ProductTitle from '../common/ProductTitle';
import ProductPriceSection from '../common/ProductPriceSection';
import DropRatio from '../common/DropRatio';

interface HorizontalProductListItemProps {
    index: number;
    code: number;
    price: number;
    imageUrl: string;
    name: string;
    dropRatio?: number;
    countOfPrices?: number;
    followCount?: number;
    isVisible: boolean;
}

const HorizontalProductListItem: React.FC<HorizontalProductListItemProps> = ({
    index,
    code,
    price,
    imageUrl,
    name,
    dropRatio,
    countOfPrices,
    followCount,
    isVisible,
}) => {
    return (
        <motion.li
            initial={{ opacity: isVisible ? 1 : 0 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                transform: `translateX(calc(${-index} * 100% - ${index} * 0.5rem))`,
            }}

            transition={{ duration: 1, delay: isVisible ? 0.5 : 0 }}
            className={`relative flex flex-row items-start justify-start bg-white py-4 px-8 rounded-md gap-12 w-[34rem] min-w-full ${isVisible ? 'pVisible' : 'pHidden'}}`}
            data-testid="horizontal-product-list-item"
        >
            <ProductImage imageUrl={imageUrl} name={name} />
            <div className='w-3/4 h-full flex flex-col gap-6 justify-center'>
                <ProductTitle name={name} />
                <ProductPriceSection price={price} countOfPrices={countOfPrices} />
                {followCount && <b className='text-[#70747a] font-medium'>{followCount}+ takip</b>}
            </div>
            <DropRatio dropRatio={dropRatio} productType='horizontal' />
        </motion.li>
    );
};

export default HorizontalProductListItem;