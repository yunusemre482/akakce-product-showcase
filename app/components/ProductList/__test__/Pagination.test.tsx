import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from '../Pagination';

test('should call goToNextPage function when the "Sonraki" button is clicked', () => {
    // Mock the goToNextPage function
    const goToNextPage = jest.fn();

    // Render the Pagination component
    render(<Pagination goToNextPage={goToNextPage} goToPreviousPage={() => { }} />);

    // Find the "Sonraki" button by its unique testID attribute and click it using userEvent.click
    const nextButton = screen.getByTestId('next-button');
    // fireEvent.click(nextButton); 
    fireEvent.click(nextButton);

    // Expect the goToNextPage function to be called
    expect(goToNextPage).toHaveBeenCalled();
});

test('should call goToPreviousPage function when the "Önceki" button is clicked', () => {

    // Mock the goToPreviousPage function
    const goToPreviousPage = jest.fn();

    // Render the Pagination component
    render(<Pagination goToNextPage={() => { }} goToPreviousPage={goToPreviousPage} />);

    // Find the "Önceki" button by its unique testID attribute and click it using userEvent.click
    const prevButton = screen.getByTestId('prev-button');
    // fireEvent.click(prevButton);
    fireEvent.click(prevButton);

    // Expect the goToPreviousPage function to be called
    expect(goToPreviousPage).toHaveBeenCalled();
});
