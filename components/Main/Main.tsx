import { createRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch } from '../../redux/hooks';
import { getLoginAc } from '../../redux/reducers/loginReducer';
import { getLocalDataUser } from '../../lib/getLocalData';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import mainStyle from './Main.module.scss';

const Main = ({ children, ...props }) => {
    const [isChangeWidth, setIsChangeWidth] = useState(false);
    const router = useRouter();
    const dispatch = useAppDispatch();
    const mainSidebarRef = createRef();
    
    useEffect(() => {
        const userData = getLocalDataUser();
        if (userData.id === null) router.replace('/login');
        // console.log("hello");
        // debugger
        dispatch(getLoginAc({
            userId: userData.id,
            userName: userData.login
        }));
    }, []);

    useEffect(() => {
        mainSidebarRef.current.classList.toggle(mainStyle.main__sidebar_active);
    }, [isChangeWidth]);

    return (
        <>
            <div className={mainStyle.main}>
                <div className={mainStyle.main__sidebar} ref={mainSidebarRef}>
                    <Sidebar isChangeWidth={setIsChangeWidth} />
                </div>
                <div className={mainStyle.main__content}>
                    <Header />
                    <div className={mainStyle.main__wrapper}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Main;