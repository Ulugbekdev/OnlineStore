import Head from 'next/head';
import { useEffect } from 'react';
import Container from '../components/Container/Container';
import { getCartAc } from '../lib/actions';
import { getCartThunk } from '../lib/thunks';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import cartStyle from '../styles/Cart.module.scss';

const Cart = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const userId = useAppSelector(state => state.loginPage.userId);

    useEffect(() => {
        dispatch(getCartThunk(userId));    
    }, [])

    return (
        <>
            <Head>
                <title>Cart</title>
            </Head>
            <Container>
                <div className={cartStyle.cart}>
                    <ul className={cartStyle.cart__list}>
                        <li className={cartStyle.cart__item}>
                            Samsung tv
                        </li>
                        <li className={cartStyle.cart__item}>
                            800
                        </li>
                        <li className={cartStyle.cart__item}>
                            5
                        </li>
                        <li className={cartStyle.cart__item}>
                            4000
                        </li>
                    </ul>
                </div>
            </Container>
        </>
    )
}

export default Cart;