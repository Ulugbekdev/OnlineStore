import cs from 'classnames';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { logOutAc } from '../../lib/actions';
import { LOG_OUT } from '../../lib/constants';
import { removeLocalDataUser } from '../../lib/localStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import headerStyle from './Header.module.scss';

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

    const cartClickEvent = () => {
        router.replace('/cart');
    }

    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.header__userName}>
                {userName}
            </div>
            <div className={headerStyle.header__btnsGroup}>
                <Link href={'/'}>
                    <a className={headerStyle.header__btn}>
                        Home
                    </a>
                </Link>
                <button className={cs([headerStyle.header__btn, headerStyle.header__logout])} onClick={() => logOutEvent()}>Logout</button>
                <button className={cs([headerStyle.header__btn, headerStyle.header__basket])} onClick={() => cartClickEvent()}>
                    <FontAwesomeIcon icon={faBasketShopping} />
                </button>
            </div>
        </header>
    )
}

export default Header;