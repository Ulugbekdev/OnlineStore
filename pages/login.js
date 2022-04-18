import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getlogin } from '../redux/reducers/loginReducer';
import { useRouter } from 'next/router';
import LoginForm from '../components/Forms/LoginForm/LoginForm';
import loginStyle from '../styles/Login.module.scss';
import Head from 'next/head';

const Login = () => {
    const [isRedirectToMain, setIsRedirectToMain] = useState(false);
    const [isRedirectToRegister, setIsRedirectToRegister] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('userName')) router.replace('/');
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

    if (isRedirectToMain) router.replace('/');

    if (isRedirectToRegister) router.replace('/register');

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