import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import logo from '../public/penguu icono.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Penguu.art',
  description: 'Emote artist page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Quicksand:wght@300..700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
