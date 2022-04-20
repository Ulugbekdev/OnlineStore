import cs from 'classnames';
import headerStyle from '../Header.module.scss';

const HeaderBtn = ({ children, className, clickEvent = null, ...props }) => {
    const onClickEvent = () => {
        if (clickEvent === null) return;
        return clickEvent();
    };
    return (
        <>
            <button className={cs(headerStyle.header__btn, className)} onClick={() => onClickEvent()}>
                {children}
            </button>
        </>
    )
};

export default HeaderBtn;