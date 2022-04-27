import { useRouter } from "next/router";
import { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { loginThunk } from "../lib/thunks";
import Auth from "../components/Auth/Auth";

const Login = (): JSX.Element => {
    const [isRedirectToMain, setIsRedirectToMain] = useState(false);
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

    return (
        <>
            <Auth isAdmin={false} submitEvent={submitEvent} />
        </>
    )
};

export default Login;