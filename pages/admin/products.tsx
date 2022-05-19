import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import AdminMain from '../../components/AdminMain/AdminMain';
import ProductForm from '../../components/Forms/ProductForm/ProductForm';
import { addProductThunk, productsThunk } from '../../lib/thunks';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import productsStyle from '../../styles/CommonProducts.module.scss';

const Products = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(state => state.adminProductsPage.products);

    useEffect(() => {
        dispatch(productsThunk(true));
    }, [])

    const submitEvent = (data: any, event: any) => {
        dispatch(addProductThunk(data)).then(() => dispatch(productsThunk(true)));
    }
    
    const productsArray = products && products.map((el: any, index) => {
        return (
            <div key={index} className={productsStyle.product__item}>
                <div className={productsStyle.product__img}>
                    <Image width={'100vw'} height={200} src={el.imgSrc} alt={el.title} />
                </div>
                <div className={productsStyle.product__content}>
                    <p className={productsStyle.product__name}>{el.name}</p>
                    <p className={productsStyle.product__price}>Price:{el.price}</p>
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
            <AdminMain>
                <ProductForm submitEvent={submitEvent}/> 
                <div className={productsStyle.product}>
                    {productsArray}
                </div>
            </AdminMain>
        </>
    )
};

export default Products;