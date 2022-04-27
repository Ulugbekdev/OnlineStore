import Head from 'next/head';
import Main from '../../components/AdminMain/AdminMain';

const Admin = (): JSX.Element => {
	return (
		<>
			<Head>
				<title>Admin</title>
			</Head>
			<Main>
				<h1>
					Home page
				</h1>
			</Main>
		</>
	)
};

export default Admin;