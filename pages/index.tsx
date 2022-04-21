import Head from 'next/head';
import { useEffect } from 'react';
import Main from '../components/Main/Main';

const Home = (): JSX.Element => {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<Main>
				<h1>
					Home page
				</h1>
			</Main>
		</>
	)
};

export default Home;