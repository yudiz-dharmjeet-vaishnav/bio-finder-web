import '@/src/assets/scss/globals.scss'
import RootLayout from '@/src/pages/layout'

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}
