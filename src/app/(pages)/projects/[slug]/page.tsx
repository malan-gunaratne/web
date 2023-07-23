import React from 'react'
import { notFound } from 'next/navigation'
import { fetchProject } from '@/app/graphql'
import { DateString } from '@/app/components/Dates/DateString';
import styles from './index.module.scss'
import { PageProps, Project, Skill } from './types'

const Page: React.FC<PageProps> = async ({ params: { slug } }) => {
    const project: Project = await fetchProject(slug)
    if(project) {
        return (
            <main className={styles.container}>
                <div className={styles.hero}>
                    <h1>{project.title}</h1>
                    <div className={styles.details}>
                        <p>
                            {`status: ${project.isComplete === 'yes' 
                                        ? 'completed' 
                                        : 'ongoing' 
                                    }`
                            }
                        </p>
                        <div>
                            completion date:&nbsp;
                            {
                                project.completionDate 
                                ? (
                                    <DateString date={project.completionDate} format="YYYY" />
                                )
                                : (
                                    'TBC'
                                )
                            }
                        </div>
                    </div>
                    <div className={styles.stack}>
                        {
                            project.skills?.map((skill: Skill) => (
                                <div key={skill.title} className={styles.skill}>
                                    {skill.title}
                                </div>
                            ))
                        }
                    </div>
                    <div className={styles.description}>
                        <p>{project.description}</p>
                    </div>
                </div> 
            </main>
        )
    } else {
        return notFound()
    }
} 

export default Page