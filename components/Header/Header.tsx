import Burger from '../Burger/Burger';
import HeaderBtnsGroup from './HeaderBtnsGroup/HeaderBtnsGroup';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import HeaderUserData from './HeaderUserData/HeaderUserData';
import headerStyle from './Header.module.scss';

const Header = (): JSX.Element => {
    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.header__content}>
                <HeaderSearch/>
                <div className={headerStyle.header__nav}>
                    <div className={headerStyle.header__item}>
                        <HeaderBtnsGroup/>
                    </div>
                    <div className={headerStyle.header__item}>
                        <HeaderUserData/>
                    </div>
                    <div className={headerStyle.header__item}>
                        <Burger classNameBurgerBtn={headerStyle.header__switchBtn}/>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;