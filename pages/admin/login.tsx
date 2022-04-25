import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { getlogin } from '../../redux/reducers/loginReducer';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getLocalDataUser } from '../../lib/getLocalData';
import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import loginStyle from '../../styles/Login.module.scss';

const Login = (): JSX.Element => {
    const [isRedirectToMain, setIsRedirectToMain] = useState(false);
    const [isRedirectToRegister, setIsRedirectToRegister] = useState(false);
    const router = useRouter();
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        const userData = getLocalDataUser();
        if (userData.login) setIsRedirectToMain(true);
    }, [])

    const submitEvent = (data, formEvent) => {
        const errorSpan = formEvent.target.children[2];
        errorSpan.innerHTML = '';
        
        dispatch(getlogin(data)).then(() => {
            return setIsRedirectToMain(true);
        }, error => {
            errorSpan.innerHTML = error;
        });
    };

    const redirectEvent = () => {
        setIsRedirectToRegister(true);
    }

    if (isRedirectToMain) router.replace('/admin');

    if (isRedirectToRegister) router.replace('/admin/register');

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className={loginStyle.login}>
                <h1 className={loginStyle.login__heading}>Login</h1>
                <LoginForm submitEvent={submitEvent}/>
                <button className={loginStyle.login__btn} onClick={() => redirectEvent()}>Register</button>
            </div>
        </>
    )
}

export default Login;