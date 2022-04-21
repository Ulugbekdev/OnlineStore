import Head from "next/head";
import { useEffect } from "react";
import Main from "../components/Main/Main";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addOrders } from "../redux/reducers/orderReducer";
import ordersStyle from '../styles/Orders.module.scss';

const Orders = () => {
    const dispatch = useAppDispatch();
    const orders = useAppSelector(state => state.ordersPage.orders);

    useEffect(() => {
        dispatch(addOrders());
    }, []);

    const ordersArray = orders && orders.map((el: any, index) => {
        return (
            <li key={index} className={ordersStyle.orders__item}>
                <ul className={ordersStyle.orders__innerList}>
                    <li className={ordersStyle.orders__title}>{el.title}</li>
                    <li className={ordersStyle.orders__customer}>{el.customer}</li>
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
                    {ordersArray}
                </ul>
            </Main>
        </>
    )
};

export default Orders;