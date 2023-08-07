import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

const VerticalProductSkeleton: React.FC = () => {
    return (

        <li
            role='status'
            data-testid="skeleton"
            className='flex flex-col items-start justify-start bg-white p-4 rounded-md gap-[6px] max-w-[16rem] min-w-[16rem] shadow animate-pulse'
        >
            <div className='flex items-center justify-center w-3/4 mx-auto h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700'>
                <MdShoppingCart className='w-10 h-10 text-gray-200 dark:text-gray-600' />
            </div>
            <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-1'></div>
            <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-1 w-[10rem]'></div>
            <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2 w-36'></div>
            <span className='sr-only'>Loading...</span>
        </li>
    );
};

export default VerticalProductSkeleton;