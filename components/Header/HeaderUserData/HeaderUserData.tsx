import { useRouter } from 'next/router';
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { logOutAc } from "../../../redux/reducers/loginReducer";
import HeaderBtn from '../HeaderBtn/HeaderBtn';
import userStyle from './HeaderUserData.module.scss';
import { useEffect } from 'react';

const User = () => {
    const userName = useAppSelector(state => state.login.userName);
    const router = useRouter();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!userName) router.replace('/login');
    }, [userName])

    const logOutEvent = () => {
        localStorage.removeItem("userName");
        localStorage.removeItem("userId");
        dispatch(logOutAc());
    }

    return (
        <div className={userStyle.user}>
            <HeaderBtn className={userStyle.user__btn}></HeaderBtn>
            <div className={userStyle.user__heading}>
                <p className={userStyle.user__name}>
                    {userName}
                </p>
            </div>
            <div>
                <button className={userStyle.user__logOffBtn} onClick={() => logOutEvent()}>Log out</button>
            </div>
            <button className={userStyle.user__btn_calendar}>
                <FontAwesomeIcon icon={faCalendar}/>
            </button>
        </div>
    )
};

export default User;