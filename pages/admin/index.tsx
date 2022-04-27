import Head from 'next/head';
import Main from '../../components/AdminMain/AdminMain';

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