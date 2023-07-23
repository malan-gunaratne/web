import React from 'react'
import { notFound } from 'next/navigation'
import { fetchPage, fetchResources } from '@/app/graphql'
import { ArrowedLink } from '@/app/components/Links/ArrowedLink'
import { Page } from '@/payload-types'
import { Resource, PageProps } from './types'

import styles from './index.module.scss'

const Page: React.FC = async () => {
    const page: Page|null = await fetchPage(['resources'])
    const resources: Array<Resource> = await fetchResources()

    if(page?.template) {
        const pageProps: PageProps = page.template[0]
        const {
            heroContent
        } = pageProps
        return (
            <main className={styles.container}>
                <div className={styles.hero}>
                    <p>{heroContent?.heading}</p>
                    <p>{heroContent?.subheading}</p>
                </div>
                <div className={styles.resources}>
                {
                    resources.map((resource: Resource, i) => (
                        <ArrowedLink 
                            text={resource.title}
                            link={`${process.env.NEXT_PUBLIC_SITE_URL}/resources/${resource.slug}`}
                            external={false}
                        />
                    ))
                }
                </div>
            </main>
        )
    } else {
        return notFound()
    }
}

export default Page