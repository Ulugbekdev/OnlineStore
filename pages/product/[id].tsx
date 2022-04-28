import { useRouter } from 'next/router';
import productIdStyle from '../../styles/ProductId.module.scss';

const ProductId = (): JSX.Element => {
    const router = useRouter();

    return (
        <>
            <h1>Product id : {router.query.id}</h1>  
        </>
    )
};

export default ProductId;