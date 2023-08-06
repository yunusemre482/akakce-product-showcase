import React, { useEffect, useState } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

import useApi from '../../services/api';
import usePrevious from '../../hooks/usePrevious';
interface PaginationProps {
    goToNextPage: () => void;
    goToPreviousPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ goToNextPage, goToPreviousPage }) => {


    return (
        <div className='flex flex-row w-full justify-between mt-6  px-3'>
            <button id="pagination-prev-button" data-testid="prev-button" className='bg-[#237ec5] flex items-center justify-center flex-row text-white px-8 py-3 gap-2 rounded-full  shadow focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75ƒ' onClick={goToPreviousPage}>
                <MdArrowBackIos /> <span>Önceki</span>
            </button>
            <button id='pagination-next-button' name="next" data-testid="next-button" className='bg-[#237ec5] flex items-center justify-center flex-row text-white px-8 py-3 gap-2 rounded-full  shadow focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;' onClick={goToNextPage}>
                <span>Sonraki </span>
                <MdArrowForwardIos />
            </button>
        </div>
    );
};

export default Pagination;