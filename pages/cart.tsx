import Head from 'next/head';
import cs from 'classnames';
import { useEffect } from 'react';
import { addOrderCartThunk, decreaseQuantityCartThunk, getCartThunk, increaseNumberCartThunk } from '../lib/thunks';
import Container from '../components/Container/Container';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cartStyle from '../styles/Cart.module.scss';
import { CartProduct } from '../lib/types/cartType/cartType';

const Cart = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const userId = useAppSelector(state => state.loginPage.userId);
    const arrayProductsCart = useAppSelector(state => state.cartPage.products);

    useEffect(() => {
        dispatch(getCartThunk(userId));
    }, [])

    const increaseProductEvent = (userId, productId) => {
        dispatch(increaseNumberCartThunk({
            userId: userId,
            productId: productId
        })).then(() => dispatch(getCartThunk(userId)));
    }

    const decreaseProductEvent = (userId, productId) => {
        dispatch(decreaseQuantityCartThunk({
            userId: userId,
            productId: productId
        })).then(() => dispatch(getCartThunk(userId)));
    }

    const productsCart = arrayProductsCart && arrayProductsCart.map((el: CartProduct): JSX.Element => {
        return (
            <>
                <ul className={cartStyle.cart__list} key={el.id}>
                    <li className={cartStyle.cart__item}>
                        {el.name}
                    </li>
                    <li className={cartStyle.cart__item}>
                        {el.price}
                    </li>
                    <li className={cartStyle.cart__item}>
                        <button
                            onClick={() => increaseProductEvent(userId, el.id)}
                            className={cs([cartStyle.cart__controlBtn, cartStyle.cart__controlBtn_plus])}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                        <p>{el.amount}</p>
                        <button
                            onClick={() => decreaseProductEvent(userId, el.id)}
                            className={cs([cartStyle.cart__controlBtn, cartStyle.cart__controlBtn_minus])}>
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                    </li>
                    <li className={cartStyle.cart__item}>
                        {el.total}
                    </li>
                </ul>
            </>
        )
    })

    const addOrderEvent = (userId) => {
        const currentDate = new Date().toLocaleDateString();

        dispatch(addOrderCartThunk({
            userId: userId,
            date: currentDate
        })).then(() => dispatch(getCartThunk(userId)));
    }

    return (
        <>
            <Head>
                <title>Cart</title>
            </Head>
            <Container>
                <div className={cartStyle.cart}>
                    <ul className={cs([cartStyle.cart__list, cartStyle.cart__list_heading])}>
                        <li className={cs([cartStyle.cart__item, cartStyle.cart__heading])}>
                            Name
                        </li>
                        <li className={cs([cartStyle.cart__item, cartStyle.cart__heading])}>
                            Price
                        </li>
                        <li className={cs([cartStyle.cart__item, cartStyle.cart__heading])}>
                            Amount
                        </li>
                        <li className={cs([cartStyle.cart__item, cartStyle.cart__heading])}>
                            Total
                        </li>
                    </ul>
                    {productsCart}
                    {productsCart.length === 0
                    ? <h1>No orders</h1>
                    :<button className={cs([cartStyle.cart__btn, 'btn'])} onClick={() => addOrderEvent(userId)}>
                        Buy
                    </button>}
                </div>
            </Container>
        </>
    )
}

export default Cart;