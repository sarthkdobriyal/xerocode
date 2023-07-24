import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'



export const metadata: Metadata = {
  title: 'XeroCode',
  description: 'AI Code Pilot',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./images/logo.png" type="image/x-icon" />
      </head>
      <body className='text-white bg-black .box-border'>
        <Header />
        {children}
        </body>
    </html>
  )
}
