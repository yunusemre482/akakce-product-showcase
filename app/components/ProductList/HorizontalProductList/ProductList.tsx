import React, { useState, useEffect } from 'react';
import Skeleton from './Skeleton';
import HorizontalProductListItem from './ProductListItem';
import Pagination from './Pagination';

interface Product {
    code: number;
    price: number;
    imageUrl: string;
    name: string;
    dropRatio?: number;
    countOfPrices?: number;
    followCount?: number;
}

interface HorizontalProductListProps {
    products: Product[];
}

const HorizontalProductList: React.FC<HorizontalProductListProps> = ({ products }) => {
    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const [isAutoChangeEnabled, setIsAutoChangeEnabled] = useState(true);

    const handleDotClick = (dotIndex: number) => {
        setCurrentProductIndex(dotIndex);
        setIsAutoChangeEnabled(false); //Cancel auto change when user clicks on a dot 
        setTimeout(() => setIsAutoChangeEnabled(true), 5000); // start auto change after 5 seconds 
    };

    useEffect(() => {
        // Function to go to the next product index
        const goToNextProduct = () => {
            if (isAutoChangeEnabled) {
                setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
            }
        };

        // Set an interval to call goToNextProduct every 5 seconds
        const intervalId = setInterval(goToNextProduct, 5000);

        // Clean up the interval when the component unmounts or products change
        return () => {
            clearInterval(intervalId);
        };
    }, [products.length, isAutoChangeEnabled]);


    return (
        <div className='relative'>
            <ul className='hidden sm:flex flex-row  overflow-hidden mx-auto w-[23rem] sm:w-[clamp(15rem,34rem,calc(100%))] min-h-max p-2 flex-1 h-64 gap-2'>
                {products.length === 0 && <Skeleton />} {/* Show skeleton when products is empty */}
                {products.map((product, index) => (
                    <HorizontalProductListItem
                        key={index}
                        index={index}
                        {...product}
                        isVisible={currentProductIndex === index}
                    />
                ))}
            </ul>
            <Pagination
                countOfDots={products.length}
                activeDotIndex={currentProductIndex}
                onDotClick={handleDotClick}
            />
        </div>
    );
};

export default HorizontalProductList;