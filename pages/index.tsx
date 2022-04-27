import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Main from '../components/Main/Main';
import { getLocalDataUser } from '../lib/localStorage';

const Home = (): JSX.Element => {
    const router = useRouter();

    useEffect(() => {
        const userData = getLocalDataUser(false);
        if (!userData.id) router.replace('/login');
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