export type PageProps = {
    params: {
        slug: string
    }
}

export type Skill = {
    title?: string
}

export type Experience = {
    title?: string
    description?: string
    startDate?: string
    endDate?: string
    skills?: Array<string> | Array<Skill>
}