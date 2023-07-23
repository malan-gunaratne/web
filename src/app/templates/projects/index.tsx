import React from 'react'
import { notFound } from 'next/navigation'
import { fetchPage, fetchProjects } from '@/app/graphql'
import { ArrowedLink } from '@/app/components/Links/ArrowedLink'
import { Page } from '@/payload-types'
import { Project, PageProps } from './types'
import styles from './index.module.scss'

const Page: React.FC = async () => {
    const page: Page|null = await fetchPage(['projects'])
    const projects: Array<Project> = await fetchProjects()

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
                <div className={styles.projects}>
                    {
                        projects.map((project: Project, i) => (
                            <ArrowedLink 
                                text={project.title}
                                link={`${process.env.NEXT_PUBLIC_SITE_URL}/projects/${project.slug}`}
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