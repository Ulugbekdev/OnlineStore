import cs from 'classnames';
import adminBurgerStyle from './AdminBurger.module.scss';


const AdminBurger = ({classNameBurgerBtn = null, classNameBurger = null, clickEvent = null, ...props}): JSX.Element => {
    const onClickEvent = () => {
        if (clickEvent === null) return;
        return clickEvent();
    };
    
    return (
        <div className={cs(adminBurgerStyle.burger, classNameBurger)} onClick={() => onClickEvent()}>
            <span className={cs(adminBurgerStyle.burger__btn, classNameBurgerBtn)}></span>
        </div>
    )
};

export default AdminBurger;