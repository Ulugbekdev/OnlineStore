import cs from 'classnames';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { removeLocalDataUser } from '../../lib/localStorage';
import { logOutAc } from '../../lib/actions';
import headerStyle from './Header.module.scss';
import { LOG_OUT } from '../../lib/constants';

const Header = (): JSX.Element => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const userName = useAppSelector(state => state.loginPage.userName);

    useEffect(() => {
        if (!userName) router.replace('/sign-in');
    }, [userName])

    const logOutEvent = () => {
        removeLocalDataUser(false);
        dispatch(logOutAc(LOG_OUT));
    }

    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.header__userName}>
                {userName}
            </div>
            <div className={headerStyle.header__btnsGroup}>
                <button className={cs([headerStyle.header__btn, headerStyle.header__logout])} onClick={() => logOutEvent()}>Logout</button>
                <button className={cs([headerStyle.header__btn, headerStyle.header__basket])}>
                    <FontAwesomeIcon icon={faBasketShopping} />
                </button>
            </div>
        </header>
    )
}

export default Header;