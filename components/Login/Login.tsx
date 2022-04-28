import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { getLocalDataUser } from '../../lib/localStorage';
import { signInEvent } from '../../lib/events';
import { loginThunk } from '../../lib/thunks';
import LoginForm from '../Forms/LoginForm/LoginForm';
import signStyle from '../../styles/CommonSign.module.scss';

const Login = ({isAdmin, ...props}): JSX.Element => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [isRedirectToMain, setIsRedirectToMain] = useState(false);
    const [isRedirectToRegister, setIsRedirectToRegister] = useState(false);

    useEffect(() => {
        const userData = getLocalDataUser(isAdmin ? true : false);
        if (userData.login) setIsRedirectToMain(true);
    }, [])

    const submitEvent = (data, formEvent) => {
        const errorMessage = signInEvent(formEvent);

        dispatch(loginThunk(data, true, isAdmin ? true : false)).then(() => {
            return setIsRedirectToMain(true);
        }, error => {
            errorMessage.innerHTML = error;
        });
    };

    if (isRedirectToMain) router.replace(isAdmin ? '/admin' : '/');

    if (isRedirectToRegister) router.replace(isAdmin ? '/admin/sign-up' : '/sign-up');

    return (
        <>
            <Head>
                <title>{isAdmin ? 'Login' : 'Sign in'}</title>
            </Head>
            <div className={signStyle.sign}>
                <h1 className={signStyle.sign__heading}>{isAdmin ? 'Login' : 'Sign in'}</h1>
                <LoginForm submitEvent={submitEvent} />
                <button className={signStyle.sign__btn} onClick={() => setIsRedirectToRegister(true)}>{isAdmin ? 'Register' : 'Sign up'}</button>
            </div>
        </>
    )
};

export default Login;