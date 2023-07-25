'use client'
import Image from 'next/image'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Workflows from '@/components/Workflows'
import Footer from '@/components/Footer'
import  LazyMotionComponent  from '@/components/LazyMotionComponent'

export default function Home() {
  return (
    <main className="w-full h-screen">
        <LazyMotionComponent>

        <Hero />
        
        <Features />
        <Workflows />
        <Footer />
        </LazyMotionComponent>
    </main>
  )
}
