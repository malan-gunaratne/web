export type PageProps = {
    params: {
        slug: string
    }
}

export type Skill = {
    title?: string
}

export type Project = {
    title?: string
    isComplete?: string
    completionDate?: string
    description?: string
    skills?: Array<string> | Array<Skill>
}
