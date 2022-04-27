import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getLocalDataUser } from '../../lib/localStorage';
import AdminLoginForm from '../../components/Forms/LoginForm/LoginForm';
import { loginThunk } from '../../lib/thunks';
import loginStyle from '../../styles/AdminLogin.module.scss';

const Login = (): JSX.Element => {
    const [isRedirectToMain, setIsRedirectToMain] = useState(false);
    const [isRedirectToRegister, setIsRedirectToRegister] = useState(false);
    const router = useRouter();
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        const userData = getLocalDataUser(true);
        if (userData.login) setIsRedirectToMain(true);
    }, [])

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

    if (isRedirectToRegister) router.replace('/admin/register');

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className={loginStyle.login}>
                <h1 className={loginStyle.login__heading}>Login</h1>
                <AdminLoginForm submitEvent={submitEvent}/>
                <button className={loginStyle.login__btn} onClick={() => setIsRedirectToRegister(true)}>Register</button>
            </div>
        </>
    )
}

export default Login;