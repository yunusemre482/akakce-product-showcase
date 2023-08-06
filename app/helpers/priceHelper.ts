export function formatPrice(price: number): string[] {
    // check if the price is a number or not
    if (!price) return ['0', '00']
    // format the price to 2 decimal places
    const formattedPrice = price
        .toFixed(2)
        .replace('.', '_')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
        .replace('_', ',');
    return [formattedPrice.split(',')[0], formattedPrice.split(',')[1]]
}