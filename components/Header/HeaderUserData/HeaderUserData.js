import { useRouter } from 'next/router';
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { logOutAc } from "../../../redux/reducers/loginReducer";
import HeaderBtn from '../HeaderBtn/HeaderBtn';
import userStyle from './HeaderUserData.module.scss';
import { useEffect } from 'react';

const User = () => {
    const userName = useSelector(state => state.login.userName);
    const router = useRouter();
    const dispatch = useDispatch();

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