import AdminBurger from '../AdminBurger/AdminBurger';
import AdminHeaderBtnsGroup from './AdminHeaderBtnsGroup/AdminHeaderBtnsGroup';
import AdminHeaderSearch from './AdminHeaderSearch/AdminHeaderSearch';
import AdminHeaderUserData from './AdminHeaderUserData/AdminHeaderUserData';
import adminHeaderStyle from './AdminHeader.module.scss';

const AdminHeader = (): JSX.Element => {
    return (
        <header className={adminHeaderStyle.header}>
            <div className={adminHeaderStyle.header__content}>
                <AdminHeaderSearch/>
                <div className={adminHeaderStyle.header__nav}>
                    <div className={adminHeaderStyle.header__item}>
                        <AdminHeaderBtnsGroup/>
                    </div>
                    <div className={adminHeaderStyle.header__item}>
                        <AdminHeaderUserData/>
                    </div>
                    <div className={adminHeaderStyle.header__item}>
                        <AdminBurger classNameBurgerBtn={adminHeaderStyle.header__switchBtn}/>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default AdminHeader;