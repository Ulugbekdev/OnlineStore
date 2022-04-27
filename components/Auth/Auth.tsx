import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getLocalDataUser } from "../../lib/localStorage";
import LoginForm from "../Forms/LoginForm/LoginForm";
import loginStyle from './Auth.module.scss';

const Auth = ({isAdmin, submitEvent, ...props}): JSX.Element => {
    const [isRedirectToMain, setIsRedirectToMain] = useState(false);
    const [isRedirectToRegister, setIsRedirectToRegister] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const userData = getLocalDataUser(isAdmin ? true : false);
        if (userData.login) setIsRedirectToMain(true);
    }, [])

    if (isRedirectToMain) router.replace(isAdmin ? '/admin' : '/');

    if (isRedirectToRegister) router.replace(isAdmin ? '/admin/sign-up' : '/sign-up');

    return (
        <>
            <Head>
                <title>{isAdmin ? 'Login' : 'Sign in'}</title>
            </Head>
            <div className={loginStyle.login}>
                <h1 className={loginStyle.login__heading}>{isAdmin ? 'Login' : 'Sign in'}</h1>
                <LoginForm submitEvent={submitEvent} />
                <button className={loginStyle.login__btn} onClick={() => setIsRedirectToRegister(true)}>{isAdmin ? 'Register' : 'Sign up'}</button>
            </div>
        </>
    )
};

export default Auth;