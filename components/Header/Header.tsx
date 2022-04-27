import cs from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import headerStyle from './Header.module.scss';

const Header = (): JSX.Element => {
    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.header__userName}>
                {'Ulugbek'}
            </div>
            <div className={headerStyle.header__btnsGroup}>
                <button className={cs([headerStyle.header__btn, headerStyle.header__logout])}>Logout</button>
                <button className={cs([headerStyle.header__btn, headerStyle.header__basket])}>
                    <FontAwesomeIcon icon={faBasketShopping} />
                </button>
            </div>
        </header>
    )
}

export default Header;