
import React, { useEffect, useState } from 'react'
import useApi from '~/services/api';
import type { IProductListItem } from '~/shared/types/ProductListItem.interface';
import VerticalProductList from '~/components/ProductList/VerticalProductList/ProductList';
import HorizontalProductList from '~/components/ProductList/HorizontalProductList/ProductList';
import Pagination from '~/components/ProductList/Pagination';
import usePrevious from '~/hooks/usePrevious';
type Props = {

}



const Products = ({ }: Props) => {
    const [nextUrl, setNextUrl] = useState<string | undefined | null>(null);
    const [products, setProducts] = useState<IProductListItem[]>([]);
    const [horizontalProducts, setHorizontalProducts] = useState<IProductListItem[]>([]);

    const previousNextUrl = usePrevious(null);


    const { getProductList } = useApi();

    const getProducts = async (pageUrl?: string) => {
        const response = await getProductList(pageUrl);
        if (!response) return;

        const { nextUrl, products, horizontalProducts } = response.result;

        setNextUrl(nextUrl);
        setProducts(products);
        setHorizontalProducts(horizontalProducts);
    }

    const handleNextPage = async () => {
        if (!nextUrl) return;
        getProducts(nextUrl);
    }

    const handlePreviousPage = async () => {
        getProducts(previousNextUrl || undefined);
    }

    useEffect(() => {
        getProducts();
    }, [])


    return (
        <main className='flex min-h-full justify-center  w-[clamp(40rem,50%,100%)] max-w-[1200px] bg-slate-200 h-fit'>
            <div className='inline-block   w-[clamp(32rem,36rem,40rem)]   h-fit px-4 py-2'>
                {horizontalProducts && <HorizontalProductList products={horizontalProducts} />}
                {products && <VerticalProductList products={products} />}
                <Pagination goToPreviousPage={handlePreviousPage} goToNextPage={handleNextPage} />
            </div>
        </main>
    )
}

export default Products