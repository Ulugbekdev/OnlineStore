import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import Main from '../components/Main/Main';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addProducts } from '../redux/reducers/productsReducer';
import productsStyle from '../styles/Products.module.scss';

const Products = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(state => state.productsPage.products);

    useEffect(() => {
        dispatch(addProducts());
    }, [])
    
    const productsArray = products && products.map((el: any, index) => {
        return (
            <div key={index} className={productsStyle.product__item}>
                <div className={productsStyle.product__img}>
                    <Image width={'100vw'} height={200} src={el.imgSrc} alt={el.title} />
                </div>
                <div className={productsStyle.product__content}>
                    <p className={productsStyle.product__title}>{el.title}</p>
                    <p className={productsStyle.product__price}>Price:{el.price}</p>
                    <p className={productsStyle.product__amount}>Amount:{el.amount}</p>
                    <p className={productsStyle.product__status}>Status:{el.status}</p>
                </div>
            </div>
        )
    })

    return (
        <>
            <Head>
                <title>Products</title>
            </Head>
            <Main>
                <div className={productsStyle.product}>
                    {productsArray}
                </div>
            </Main>
        </>
    )
};

export default Products;