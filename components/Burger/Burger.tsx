import cs from 'classnames';
import burgerStyle from './Burger.module.scss';


const Burger = ({classNameBurgerBtn = null, classNameBurger = null, clickEvent = null, ...props}): JSX.Element => {
    const onClickEvent = () => {
        if (clickEvent === null) return;
        return clickEvent();
    };
    
    return (
        <div className={cs(burgerStyle.burger, classNameBurger)} onClick={() => onClickEvent()}>
            <span className={cs(burgerStyle.burger__btn, classNameBurgerBtn)}></span>
        </div>
    )
};

export default Burger;