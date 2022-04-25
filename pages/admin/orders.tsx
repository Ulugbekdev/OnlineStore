import Head from "next/head";
import { useEffect } from "react";
import Main from "../../components/Main/Main";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addOrders } from "../../redux/reducers/orderReducer";
import ordersStyle from '../../styles/Orders.module.scss';

const Orders = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const orders = useAppSelector(state => state.ordersPage.orders);

    useEffect(() => {
        dispatch(addOrders());
    }, []);

    const ordersArray = orders && orders.map((el: any, index): JSX.Element => {
        return (
            <li key={index} className={ordersStyle.orders__item}>
                <ul className={ordersStyle.orders__innerList}>
                    <li className={ordersStyle.orders__innerItem}>{el.customer}</li>
                    <li className={ordersStyle.orders__innerItem}>{el.product}</li>
                    <li className={ordersStyle.orders__innerItem}>{el.amount}</li>
                    <li className={ordersStyle.orders__innerItem}>{el.price}</li>
                    <li className={ordersStyle.orders__innerItem}>{el.status}</li>
                    <li className={ordersStyle.orders__innerItem}>{el.date}</li>
                    <li className={ordersStyle.orders__innerItem}>{el.total}</li>
                </ul>
            </li>
        )
    });

    return (
        <>
            <Head>
                <title>Orders</title>
            </Head>
            <Main>
                <ul className={ordersStyle.orders}>
                    <li>
                        <ul className={ordersStyle.orders__headingList}>
                            <li className={ordersStyle.orders__headingItem}>Customer</li>
                            <li className={ordersStyle.orders__headingItem}>Product</li>
                            <li className={ordersStyle.orders__headingItem}>Amount</li>
                            <li className={ordersStyle.orders__headingItem}>Price</li>
                            <li className={ordersStyle.orders__headingItem}>Status</li>
                            <li className={ordersStyle.orders__headingItem}>Date</li>
                            <li className={ordersStyle.orders__headingItem}>Total</li>
                        </ul>
                    </li>
                    {ordersArray}
                </ul>
            </Main>
        </>
    )
};

export default Orders;