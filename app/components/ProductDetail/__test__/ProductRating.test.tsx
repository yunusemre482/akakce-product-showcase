import React from 'react';
import { queryByTestId, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Rating from '../ProductRating';

test('renders the correct number of filled and empty stars based on the rating', () => {
    const { getByTestId, queryByText, queryAllByTestId } = render(<Rating rating={3.6} />);

    // write regex to match the text content of the filled stars and empty stars
    const filledStars = queryAllByTestId(/p_star_full/);
    const emptyStars = queryAllByTestId(/p_star_empty/);
    const halfStar = getByTestId("p_start_half")


    expect(filledStars).toHaveLength(3);
    expect(emptyStars).toHaveLength(1);
    expect(halfStar).toBeInTheDocument();

});

test('does not render a half star if the rating is a whole number', () => {
    render(<Rating rating={4} />);

    const filledStars = screen.queryAllByTestId(/p_star_full/);
    const emptyStars = screen.queryAllByTestId(/p_star_empty/);
    const halfStar = screen.queryByTestId("p_start_half");

    // check if the half star should not be rendered when the rating is a whole number 
    expect(filledStars).toHaveLength(4);
    expect(emptyStars).toHaveLength(1);
    expect(halfStar).toBeNull();

});


test('renders the full empty rating', () => {

    render(<Rating rating={0} />);

    const filledStars = screen.queryAllByTestId(/p_star_full/);
    const emptyStars = screen.queryAllByTestId(/p_star_empty/);
    const halfStar = screen.queryByTestId("p_start_half");

    // check if the half star should not be rendered when the rating is a whole number
    expect(filledStars).toHaveLength(0);
    expect(emptyStars).toHaveLength(5);
    expect(halfStar).toBeNull();
});