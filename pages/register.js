import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/reducers/loginReducer';
import { useRouter } from 'next/router';
import LoginForm from '../components/Forms/LoginForm/LoginForm';
import registerStyle from '../styles/Register.module.scss';

const Register = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [isRedirectToMain, setIsRedirectToMain] = useState(false);
    

    const submitEvent = (data, formEvent) => {
        dispatch(register(data));
        setIsRedirectToMain(true);
    }

    if (isRedirectToMain) router.replace('/');

    return (
        <div className={registerStyle.register}>
            <h1 className={registerStyle.register__heading}>Registration</h1>
            <LoginForm submitEvent={submitEvent}/>
        </div>
    )
};

export default Register;