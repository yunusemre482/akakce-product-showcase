import React from 'react';
import { render } from '@testing-library/react';
import ProductPrice from '../ProductPrice';
import '@testing-library/jest-dom';

const price = 12002.99;
const countOfPrices = 5;



/**
 * Test if the formatted price and count of prices are rendered correctly
 */
test('renders the formatted price and count of prices', () => {
    // mock the formatPrice function 
    jest.mock('../../../helpers/priceHelper.ts', () => ({
        formatPrice: jest.fn(() => ['12.002', '99']),
    }));

    const { getByTestId } = render(<ProductPrice price={price} countOfPrices={countOfPrices} />);

    const countOfPricesElement = getByTestId('count-of-prices');
    const formattedPriceElement = getByTestId('p_price_base');
    const formattedPriceDecimalElement = getByTestId('p_price_decimal');

    expect(countOfPricesElement).toHaveTextContent(`${countOfPrices} satıcı içerisinden kargo dahil en uygun fiyat seçeneği`);
    expect(formattedPriceElement).toHaveTextContent('12.002');
    expect(formattedPriceDecimalElement).toHaveTextContent('99 TL');


});


/**
 * Test if not rendering the formatted price and count of prices when the price is not provided 
 */



test('should not render the formatted price and count of prices when the price is not provided', () => {
    jest.mock('../../../helpers/priceHelper.ts', () => ({
        formatPrice: jest.fn(() => ['0', '00']),
    }));

    const { queryByTestId } = render(<ProductPrice price={null} countOfPrices={countOfPrices} />);

    const countOfPricesElement = queryByTestId('count-of-prices');
    const formattedPriceElement = queryByTestId('p_price_base');
    const formattedPriceDecimalElement = queryByTestId('p_price_decimal');

    expect(countOfPricesElement).toHaveTextContent(`${countOfPrices} satıcı içerisinden kargo dahil en uygun fiyat seçeneği`);
    expect(formattedPriceElement).toHaveTextContent('0');
    expect(formattedPriceDecimalElement).toHaveTextContent('00 TL');

});