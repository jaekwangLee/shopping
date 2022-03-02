import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import '../styles/default.css';
import store from '@reducer/index';


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
