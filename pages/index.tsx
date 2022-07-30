import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getLoginAc } from '../lib/actions';
import { getLocalDataUser } from '../lib/localStorage';
import { useAppDispatch } from '../redux/hooks';
import { GET_LOGIN } from '../lib/constants';
import Container from '../components/Container/Container';
import Products from '../components/Products/products';

const Home = (): JSX.Element => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const userData = getLocalDataUser(false);
        if (!userData.id) router.replace('/sign-in');
        dispatch(getLoginAc({
            userId: userData.id,
            userName: userData.login
        }, GET_LOGIN));
    }, []);

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Container>
                <Products/>
            </Container>
        </>
    )
}

export default Home;
