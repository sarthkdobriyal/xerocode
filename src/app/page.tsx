'use client'
import Image from 'next/image'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Workflows from '@/components/Workflows'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <main className="w-full h-screen">
        

        <Hero />
        
        <Features />
        <Workflows />
        <Footer />
    </main>
  )
}
