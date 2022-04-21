import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '../styles/globals.scss';
import store from '../redux/store';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp;