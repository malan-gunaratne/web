import React from 'react'
import { notFound } from 'next/navigation'
import { fetchExperience } from '@/app/graphql'
import { DateRange } from '@/app/components/Dates/DateRange'
import { PageProps, Experience, Skill } from './types'

import styles from './index.module.scss'

const Page: React.FC<PageProps> = async ({ params: { slug } }) => {
    const experience: Experience = await fetchExperience(slug)

    if(experience) {
        return (
            <div className={styles.container}>
                <DateRange 
                    startDate={experience.startDate}
                    endDate={experience.endDate}
                    format="MMMYYYY"
                />
                <h1>{experience.title}</h1>
                <div className={styles.skills}>
                {
                    experience.skills?.map((skill: Skill) => (
                        <div key={skill.title}>{skill.title}</div>
                    ))
                }
                </div>
                <p className={styles.description}>{experience.description}</p>
            </div>
        )
    } else {
        return notFound()
    }
}

export default Page