import '@/styles/css/main.css';
import { Alert } from '@/components/Alert';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from '@/redux/store';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
        <Alert />
      </Provider>
    </>
  );
}
