import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import AuthProvider from './auth/Provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Demo with Next App',
  description: 'Practice with NextJS 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme='cupcake'>
      <body className={inter.className}>
        <AuthProvider>
          <NavBar />
          <main className='p-5'>
            {children}
          </main>
        </AuthProvider>
        
        <main className='p-5'>{children}</main>
      </body>
    </html>
  )
}
