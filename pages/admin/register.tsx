import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { register } from '../../redux/reducers/adminLoginReducer';
import { useRouter } from 'next/router';
import AdminLoginForm from '../../components/Forms/AdminLoginForm/AdminLoginForm';
import registerStyle from '../../styles/AdminRegister.module.scss';

const Register = (): JSX.Element => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [isRedirectToMain, setIsRedirectToMain] = useState(false);


    const submitEvent = (data, formEvent) => {
        const errorSpan = formEvent.target.children[2];
        errorSpan.innerHTML = '';

        dispatch(register(data)).then(
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