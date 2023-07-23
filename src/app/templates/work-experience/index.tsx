import React from 'react'
import { notFound } from 'next/navigation'
import { fetchPage } from '@/app/graphql'
import { DateRange } from '@/app/components/Dates/DateRange'
import { ArrowedLink } from '@/app/components/Links/ArrowedLink'
import { Page } from '@/payload-types'
import { PageProps, Milestone, Skill } from './types'

import styles from './index.module.scss'

const Page: React.FC = async () => {
    const page: Page|null = await fetchPage(['work-experience'])

    if(page?.template) {
        const pageProps: PageProps = page.template[0]
        const {
            heroContent,
            experiences
        } = pageProps
        return (
            <main className={styles.container}>
                <div className={styles.hero}>
                    <p>{heroContent?.heading}</p>
                    <p>{heroContent?.subheading}</p>
                </div>
                <div className={styles.milestones}>
                    {
                        experiences?.map((milestone: Milestone) => (
                            //@ts-ignore
                            <div key={milestone.experience?.slug}>
                                <DateRange 
                                    //@ts-ignore
                                    startDate={milestone.experience?.startDate}
                                    //@ts-ignore
                                    endDate={milestone.experience?.endDate}
                                    format="MMMYYYY"
                                    classes={styles.dates}
                                />
                                <ArrowedLink
                                    //@ts-ignore
                                    text={milestone.experience?.title}
                                    //@ts-ignore
                                    link={`${process.env.NEXT_PUBLIC_SITE_URL}/work-experience/${milestone.experience?.slug}`}
                                    external={false}
                                    classes={styles.link}
                                />
                                <div className={styles.stack}>
                                    {
                                        //@ts-ignore
                                        milestone.experience?.skills?.map((skill: Skill) => (
                                            <div key={skill.title}>{skill.title}</div>
                                        ))
                                    }
                                </div>
                            </div>
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