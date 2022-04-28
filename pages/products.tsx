import Image from "next/image";
import { useAppDispatch } from "../redux/hooks";
import productsStyle from '../styles/CommonProducts.module.scss';

const Products = (): JSX.Element => {
    const dispatch = useAppDispatch();

    // const productsArray = products && products.map((el: any, index) => {
    //     return (
    //         <div key={index} className={productsStyle.product__item}>
    //             <div className={productsStyle.product__img}>
    //                 <Image width={'100vw'} height={200} src={el.imgSrc} alt={el.title} />
    //             </div>
    //             <div className={productsStyle.product__content}>
    //                 <p className={productsStyle.product__name}>{el.name}</p>
    //                 <p className={productsStyle.product__price}>Price:{el.price}</p>
    //                 <p className={productsStyle.product__amount}>Amount:{el.amount}</p>
    //                 <p className={productsStyle.product__status}>Status:{el.status}</p>
    //             </div>
    //         </div>
    //     )
    // })

    return (
        <>
            <div className={productsStyle.product__item}>
                <div className={productsStyle.product__img}>
                    <Image width={'100vw'} height={200} src={'http://images.samsung.com'} alt={'fdsafd'} />
                </div>
                <div className={productsStyle.product__content}>
                    <p className={productsStyle.product__name}>ffdas</p>
                    <p className={productsStyle.product__price}>Price:</p>
                    <p className={productsStyle.product__amount}>Amount:</p>
                    <p className={productsStyle.product__status}>Status:</p>
                </div>
            </div>
        </>
    )
};

export default Products;