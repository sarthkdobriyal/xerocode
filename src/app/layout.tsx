'use client'
import './globals.css'
import Header from '@/components/Header'
import  LazyMotionComponent  from '@/components/LazyMotionComponent'



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
        
      <LazyMotionComponent>
        <Header />
        {children}
      </LazyMotionComponent>
        </body>
  
    </html>
  )
}
