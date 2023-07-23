import './globals.scss'
import { Inter } from 'next/font/google'
import Header from '@/app/components/Header'
import { fetchGlobals } from './graphql'

const inter = Inter({ subsets: ['latin'] })

type PageProps = {
    children: React.ReactNode
}

export const RootLayout = async ({ children }: PageProps) => {
    const { mainMenu, socialMedias } = await fetchGlobals()

    return (
        <html lang="en">
            <body className={inter.className}>
                <Header 
                    menu={mainMenu}
                    socials={socialMedias}
                />
                {children}
            </body>
        </html>
    )
}

export default RootLayout

export const metadata = {
    title: 'Malan Gunaratne | Web Developer'
}