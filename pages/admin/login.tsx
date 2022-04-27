import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getLocalDataUser } from '../../lib/localStorage';
import AdminLoginForm from '../../components/Forms/LoginForm/LoginForm';
import { loginThunk } from '../../lib/thunks';
import loginStyle from '../../styles/AdminLogin.module.scss';
import Auth from '../../components/Auth/Auth';

const Login = (): JSX.Element => {
    const [isRedirectToMain, setIsRedirectToMain] = useState(false);
    const router = useRouter();
    const dispatch = useAppDispatch();

    const submitEvent = (data, formEvent) => {
        const errorSpan = formEvent.target.children[2];
        errorSpan.innerHTML = '';
        
        dispatch(loginThunk(data, true, true)).then(() => {
            return setIsRedirectToMain(true);
        }, error => {
            errorSpan.innerHTML = error;
        });
    };

    if (isRedirectToMain) router.replace('/admin');

    return (
        <>
           <Auth isAdmin={true} submitEvent={submitEvent}/>
        </>
    )
}

export default Login;