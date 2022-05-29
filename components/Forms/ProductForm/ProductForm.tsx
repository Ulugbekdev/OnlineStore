import cs from 'classnames';
import { createRef, useRef, useState } from 'react';
import productFormStyle from './ProductForm.module.scss';

const ProductForm = ({ submitEvent, ...props }): JSX.Element => {
    const [imgVal, setImgVal] = useState('');
    const [nameVal, setNameVal] = useState('');
    const [priceVal, setPriceVal] = useState('');
    const [statusVal, setStatusVal] = useState('');
    const errorMessage = createRef<HTMLSpanElement>();

    const onSubmitEvent = (event: any) => {
        event.preventDefault();

        errorMessage.current.innerHTML = '';

        if (!imgVal || !nameVal || !priceVal || !statusVal) return errorMessage.current.innerHTML = 'All fields are required';

        const newData = {
            name: nameVal,
            price: priceVal,
            status: statusVal,
            imgSrc: imgVal
        };

        submitEvent(newData, event);

        setImgVal('');
        setNameVal('');
        setPriceVal('');
        setStatusVal('');
    }

    return (
        <div>
            <form className={productFormStyle.productForm} onSubmit={e => onSubmitEvent(e)}>
                <h1 className={productFormStyle.productForm__heading}>Add product</h1>
                <input
                    type='text'
                    name='name'
                    value={nameVal}
                    className={productFormStyle.productForm__input}
                    placeholder={'Name...'}
                    onChange={e => setNameVal(e.target.value)} />
                <input
                    type='text'
                    name='price'
                    value={priceVal}
                    className={productFormStyle.productForm__input}
                    placeholder={'Price...'}
                    onChange={e => setPriceVal(e.target.value)} />
                <input
                    type='text'
                    name='status'
                    value={statusVal}
                    className={productFormStyle.productForm__input}
                    placeholder={'Status...'}
                    onChange={e => setStatusVal(e.target.value)} />
                <input
                    type='text'
                    name='imgSrc'
                    value={imgVal}
                    className={productFormStyle.productForm__input}
                    placeholder={'Img src...'}
                    onChange={e => setImgVal(e.target.value)} />
                <span className={productFormStyle.productForm__error} ref={errorMessage}></span>
                <button className={cs([productFormStyle.productForm__btn, 'btn'])}>Add</button>
            </form>
        </div>
    )
};

export default ProductForm;