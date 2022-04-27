import { useRouter } from 'next/router';
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { logOutAc } from "../../../redux/reducers/adminLoginReducer";
import AdminHeaderBtn from '../AdminHeaderBtn/AdminHeaderBtn';
import adminHeaderUserStyle from './AdminHeaderUserData.module.scss';
import { useEffect } from 'react';

const AdminHeaderUser = (): JSX.Element => {
    const userName = useAppSelector(state => state.adminLoginPage.userName);
    const router = useRouter();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!userName) router.replace('/admin/login');
    }, [userName])

    const logOutEvent = () => {
        localStorage.removeItem("userName");
        localStorage.removeItem("userId");
        dispatch(logOutAc());
    }

    return (
        <div className={adminHeaderUserStyle.user}>
            <AdminHeaderBtn className={adminHeaderUserStyle.user__btn}></AdminHeaderBtn>
            <div className={adminHeaderUserStyle.user__heading}>
                <p className={adminHeaderUserStyle.user__name}>
                    {userName}
                </p>
            </div>
            <div>
                <button className={adminHeaderUserStyle.user__logOffBtn} onClick={() => logOutEvent()}>Log out</button>
            </div>
            <button className={adminHeaderUserStyle.user__btn_calendar}>
                <FontAwesomeIcon icon={faCalendar}/>
            </button>
        </div>
    )
};

export default AdminHeaderUser;