import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Main from '../components/Container/Container';
import { getLoginAc } from '../lib/actions';
import { getLocalDataUser } from '../lib/localStorage';
import { useAppDispatch } from '../redux/hooks';

const Home = (): JSX.Element => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const userData = getLocalDataUser(false);
        if (!userData.id) router.replace('/login');
        dispatch(getLoginAc({
            userId: userData.id,
            userName: userData.login
        }));
    }, []);

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Main>

            </Main>
        </>
    )
}

export default Home;