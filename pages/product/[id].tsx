import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { productThunk } from '../../lib/thunks';
import Container from '../../components/Container/Container';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import productIdStyle from '../../styles/ProductId.module.scss';

const ProductId = (): JSX.Element => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const product = useAppSelector(state => state.productIdPage);

    useEffect(() => {
        dispatch(productThunk(router.query.id));
    }, []);

    const submitEvent = () => {
        
    }

    return (
        <>
            <Head>
                <title>Product</title>
            </Head>
            <Container>
                <div className={productIdStyle.product}>
                    <div className={productIdStyle.product__img}>
                        <Image src={product.imgSrc} alt={product.name} width={100} height={300}/>
                    </div>
                    <div className={productIdStyle.product__content}>
                        <h2 className={productIdStyle.product__name}>{product.name}</h2>
                        <h3 className={productIdStyle.product__price}>{product.price}</h3>
                        <p className={productIdStyle.product__status}>{product.status}</p>
                        <button className={productIdStyle.product__btn} onClick={() => submitEvent()}>Add to cart</button>
                    </div>
                </div>
            </Container>
        </>
    )
};

export default ProductId;