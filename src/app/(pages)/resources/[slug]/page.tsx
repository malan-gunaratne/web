import React from 'react'
import { notFound } from 'next/navigation'
import { fetchResource } from '@/app/graphql'
import { DateString } from '@/app/components/Dates/DateString'
import { ArrowedLink } from '@/app/components/Links/ArrowedLink'
import { PageProps, Resource } from './types'

import styles from './index.module.scss'

const Page: React.FC<PageProps> = async ({ params: { slug }}) => {
    const resource: Resource = await fetchResource(slug)
    if(resource) {
        return (
            <div className={styles.container}>
                <p className={styles.title}>{resource.title}</p>
                <div className={styles.dates}>
                    Posted on <DateString date={resource.createdAt} format="DDMMMYYYY" />
                </div>
                <article className={styles.description}>
                <p>{resource.description}</p>
                <ArrowedLink
                    text={resource.source?.title}   
                    link={resource.source?.link}
                    classes={styles.link}
                    external={true}
                />
                </article>
            </div>
        )
    } else {
        return notFound()
    }
} 

export default Page