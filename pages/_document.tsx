import { Html, Head, Main, NextScript } from 'next/document'
import { Navbar } from 'components/Layout/Navbar'

export default function Document() {
  return (
    <Html>
      <body className="min-h-screen text-black">
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
