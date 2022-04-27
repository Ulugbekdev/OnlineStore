import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { useRouter } from 'next/router';
import AdminLoginForm from '../../components/Forms/LoginForm/LoginForm';
import registerStyle from '../../styles/AdminRegister.module.scss';
import { loginThunk } from '../../lib/thunks';

const Register = (): JSX.Element => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [isRedirectToMain, setIsRedirectToMain] = useState(false);


    const submitEvent = (data, formEvent) => {
        const errorSpan = formEvent.target.children[2];
        errorSpan.innerHTML = '';

        dispatch(loginThunk(data, false, true)).then(
            () => setIsRedirectToMain(true),
            error => {
                errorSpan.innerHTML = error;
            }
        );
    }

    if (isRedirectToMain) router.replace('/admin');

    return (
        <div className={registerStyle.register}>
            <h1 className={registerStyle.register__heading}>Registration</h1>
            <AdminLoginForm submitEvent={submitEvent} />
        </div>
    )
};

export default Register;