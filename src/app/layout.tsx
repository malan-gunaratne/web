import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

type PageProps = {
    children: React.ReactNode
}

export const RootLayout = ({ children }: PageProps) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}

export default RootLayout

export const metadata = {
    title: 'Malan Gunaratne | Software Developer'
}