import React from 'react';
import { render, screen } from '@testing-library/react';
import PaginationDots from '../Pagination';
import '@testing-library/jest-dom';

test('should render the correct number of dots', () => {
    const countOfDots = 5;
    const activeDotIndex = 2;

    render(<PaginationDots countOfDots={countOfDots} activeDotIndex={activeDotIndex} onDotClick={() => { }} />);

    const dots = screen.getByTestId('pagination-container').children;
    expect(dots).toHaveLength(countOfDots);
});


test('should set the active dot background color correctly', () => {
    const countOfDots = 4;
    const activeDotIndex = 2;

    render(
        <PaginationDots countOfDots={countOfDots} activeDotIndex={activeDotIndex} onDotClick={() => { }} />
    );

    const activeDot = screen.getByTestId(`dot-${activeDotIndex}`);
    expect(activeDot).toHaveClass('bg-p-primary-600');
});