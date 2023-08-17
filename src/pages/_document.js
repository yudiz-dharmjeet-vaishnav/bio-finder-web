import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head />
      <body className={`text-black bg-gray-100 dark:text-white dark:bg-zinc-900`}>
        <Main />
        <NextScript />
        <script 
          dangerouslySetInnerHTML={{__html: `(function () {
            function setMode() {
              const theme = window?.localStorage?.getItem("bf-theme") || 'dark'
              if (theme === "dark") {
                window.isDark = true
                document?.body?.setAttribute('data-mode', 'dark')
              } else {
                window.isDark = false
                document?.body?.setAttribute('data-mode', 'light')
              }
            }
            document.addEventListener("DOMContentLoaded", () => {
              setMode()
            });
            setMode()
            })()`}}
          >
        </script>
      </body>
    </Html>
  )
}
