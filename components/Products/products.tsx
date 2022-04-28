import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { productsThunk } from "../../lib/thunks";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import productsStyle from './Products.module.scss';

const Products = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(state => state.productsPage.products);

    useEffect(() => {
        dispatch(productsThunk(false));
    }, [])

    const productsArray = products && products.map((el: any, index) => {
        return (
            <Link key={index} href={`/products/${el.id}`}>
                <a className={productsStyle.product__item}>
                    <div className={productsStyle.product__img}>
                        <Image width={'100vw'} height={200} src={el.imgSrc} alt={el.title} />
                    </div>
                    <div className={productsStyle.product__content}>
                        <p className={productsStyle.product__name}>{el.name}</p>
                        <p className={productsStyle.product__price}>Price:{el.price}</p>
                        <p className={productsStyle.product__amount}>Amount:{el.amount}</p>
                        <p className={productsStyle.product__status}>Status:{el.status}</p>
                    </div>
                </a>
            </Link>
        )
    })

    return (
        <>
            <div className={productsStyle.product}>
                {productsArray}
            </div>
        </>
    )
};

export default Products;