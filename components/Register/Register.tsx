import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { useRouter } from 'next/router';
import { loginThunk } from '../../lib/thunks';
import { signUpEvent } from '../../lib/events';
import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import registerStyle from '../../styles/AdminRegister.module.scss';

const Register = ({isAdmin, ...props}): JSX.Element => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [isRedirectToMain, setIsRedirectToMain] = useState(false);

    const submitEvent = (data, formEvent) => {
        const errorMessage = signUpEvent(formEvent);

        dispatch(loginThunk(data, false, isAdmin ? true : false)).then(
            () => setIsRedirectToMain(true),
            error => {
                errorMessage.innerHTML = error;
            }
        );
    }

    if (isRedirectToMain) router.replace(isAdmin ? '/admin' : '/');

    return (
        <div className={registerStyle.register}>
            <h1 className={registerStyle.register__heading}>Registration</h1>
            <LoginForm submitEvent={submitEvent} />
        </div>
    )
};

export default Register;