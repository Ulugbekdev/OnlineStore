import { createRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch } from '../../redux/hooks';
import { getLoginAc } from '../../lib/actions';
import { getLocalDataUser } from '../../lib/localStorage';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import adminMainStyle from './AdminMain.module.scss';
import { GET_LOGIN_ADMIN } from '../../lib/constants';

const AdminMain = ({ children, ...props }): JSX.Element => {
    const [isChangeWidth, setIsChangeWidth] = useState(false);
    const router = useRouter();
    const dispatch = useAppDispatch();
    const mainSidebarRef = createRef<HTMLDivElement>();

    useEffect(() => {
        const userData = getLocalDataUser(true);
        if (userData.id === null) router.replace('/admin/sign-in');
        dispatch(getLoginAc({
            userId: userData.id,
            userName: userData.login
        }, GET_LOGIN_ADMIN));
    }, []);

    useEffect(() => {
        mainSidebarRef.current.classList.toggle(adminMainStyle.main__sidebar_active);
    }, [isChangeWidth]);

    return (
        <>
            <div className={adminMainStyle.main}>
                <div className={adminMainStyle.main__sidebar} ref={mainSidebarRef}>
                    <AdminSidebar isChangeWidth={setIsChangeWidth} />
                </div>
                <div className={adminMainStyle.main__content}>
                    <AdminHeader />
                    <div className={adminMainStyle.main__wrapper}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
};

export default AdminMain;