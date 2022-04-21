import { useState } from 'react';
import formStyle from './LoginForm.module.scss';

const LoginForm = ({submitEvent, ...props}): JSX.Element => {
    const [loginVal, setLoginVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');

    const onSubmitEvent = (e) => {
        e.preventDefault();

        const errorSpan = e.target.children[2];
        errorSpan.innerHTML = '';

        if (!loginVal || !passwordVal) return errorSpan.innerHTML = 'All fields are required';
        
        const newData = {
            login: loginVal,
            password: passwordVal
        };

        submitEvent(newData, e);
    }

    return (
        <div>
            <form className={formStyle.loginForm} onSubmit={e => onSubmitEvent(e)}>
                <input 
                    type='text'
                    name='login'
                    className={formStyle.loginForm__input}
                    placeholder={'Login...'}
                    onChange={e => setLoginVal(e.target.value)} />
                <input 
                    type='password' 
                    name='password' 
                    className={formStyle.loginForm__input} 
                    placeholder={'Password...'} 
                    onChange={e => setPasswordVal(e.target.value)}/>
                <span className={formStyle.loginForm__error}></span>
                <button className={formStyle.loginForm__btn}>Send</button>
            </form>
        </div>
    )
};

export default LoginForm;