import Navbar from './Navbar'
import '../../app/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Resplendant Designs',
  description: 'Get rekt',
}

export default function SecondLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Navbar/>
        </body>
    </html>
  )
}
