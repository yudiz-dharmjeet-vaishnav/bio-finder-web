import '@/src/assets/scss/globals.scss'
import 'react-toastify/dist/ReactToastify.css';
import RootLayout from '@/src/pages/layout'

import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
      <ToastContainer />
    </RootLayout>
  )
}
