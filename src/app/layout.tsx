import type { Metadata } from 'next'
import { Lato, Poppins } from 'next/font/google'
import './globals.css'
import { Header, Footer } from '@/components'
import Providers from './providers'

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Marko Goronjic',
  description: 'Web developer, portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lato.className} ${poppins.className} relative`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
