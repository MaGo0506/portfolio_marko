import type { Metadata } from 'next'
import { Lato, Poppins } from 'next/font/google'
import './globals.css'
import { Header, Footer } from '@/components'
import Providers from './providers'
import { Toaster } from 'react-hot-toast'
import { Analytics } from '@vercel/analytics/react';
import Image from 'next/image'

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
      <body 
        className={`${lato.className} ${poppins.className} relative`}
      >
        <Providers>
          <Toaster position="top-right" toastOptions={{ 
            duration: 2500, 
            style: {
              background: "#38bdff",
              color: "white"
            },
            success: {
              iconTheme: {
                primary: "white",
                secondary: "#38bdff"
              }
            }
          }}/>
          <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
            <div className="lg:w-2/3 flex-none flex justify-end">
              <Image
                src="/assets/bg/bg-light.avif"
                alt="bg-light"
                className="w-[71.75rem] flex-none max-w-none dark:hidden"
                decoding="async"
                width={2870}
                height={1605}
              />
              <Image
                src="/assets/bg/bg-dark.avif"
                alt="bg-dark"
                className="w-[71.75rem] flex-none max-w-none hidden dark:block"
                decoding="async"
                width={2870}
                height={1605}
              />
            </div>
          </div>
          <Header />
          {children}
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
