import React from 'react'
import { notFound } from 'next/navigation'
import { PageProps } from './types'
import styles from './index.module.scss'
import { Page, Social as Socials} from '@/payload-types'
import { fetchPage, fetchSocials } from '@/app/graphql'

const Page: React.FC = async () => {
    const page: Page|null = await fetchPage(['/'])
    const socialMedias: Socials|null = await fetchSocials()

    if(page?.template) {
        const pageProps: PageProps = page.template[0]
        const {
            heroContent,
            status
        } = pageProps
        return (
            <main className={styles.container}>
                <div className={styles.hero}>
                    <p>{heroContent?.heading}</p>
                    <p>{heroContent?.subheading}</p>
                </div>
                <span className={styles.socials}>
                    {
                        socialMedias.socials?.map((social) => (
                            <a key={social.platform?.link}
                               href={social.platform?.link}
                               target="_blank">
                                <img 
                                    //@ts-ignore
                                    src={`${social.platform?.svg?.url}`} 
                                    //@ts-ignore
                                    alt={social.platform?.svg?.alt} 
                                /> 
                            </a>
                        ))
                    }
                </span>
                <a href="mailto:contact@malandev.com">contact@malandev.com</a>
                <p className={styles.status}>{status}</p>
            </main>
        )
    } else {
        return notFound()
    }
}

export default Page