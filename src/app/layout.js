import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Univerz',
  description: 'Shaping the future through education and innovation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <meta property="og:image:width" />
        <meta property="og:image:height"  />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
