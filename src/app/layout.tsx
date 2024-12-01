import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Providers from './Providers'
import Navbar from "@/components/Navbar";
import SearchBox from '@/components/SearchBox'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'my-imdb',
  description: 'its a mini version of imdb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>

        <Header/>
        <Navbar/>
        <SearchBox/>
          {children}
        </Providers>
       </body>
    </html>
  )
}