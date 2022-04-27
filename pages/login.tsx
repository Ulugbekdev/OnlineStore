import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import LoginForm from "../components/Forms/LoginForm/LoginForm";
import { loginThunk } from "../lib/thunks";
import loginStyle from '../styles/AdminLogin.module.scss';

const Login = (): JSX.Element => {
    const [isRedirectToMain, setIsRedirectToMain] = useState(false);
    const [isRedirectToRegister, setIsRedirectToRegister] = useState(false);
    const router = useRouter();
    const dispatch = useAppDispatch();

    const submitEvent = (data, formEvent) => {
        const errorSpan = formEvent.target.children[2];
        errorSpan.innerHTML = '';

        dispatch(loginThunk(data, true, false)).then(() => {
            return setIsRedirectToMain(true);
        }, error => {
            errorSpan.innerHTML = error;
        });
    };

    if (isRedirectToMain) router.replace('/');

    if (isRedirectToRegister) router.replace('/register');

    return (
        <>
            <Head>
                <title>Sign in</title>
            </Head>
            <div className={loginStyle.login}>
                <h1 className={loginStyle.login__heading}>Sign in</h1>
                <LoginForm submitEvent={submitEvent} />
                <button className={loginStyle.login__btn} onClick={() => setIsRedirectToRegister(true)}>Sign up</button>
            </div>
        </>
    )
};

export default Login;