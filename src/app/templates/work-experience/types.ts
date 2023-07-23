type Hero = {
    heading?: string
    subheading?: string
}

export type Skill = {
    title?: string
}

export type Experience = {
    title?: string
    startDate?: string
    endDate?: string
    slug?: string
    skills?: Array<Skill> | string[]
}

export type Milestone = {
    experience?: Experience | string  
}

export type PageProps = {
    heroContent?: Hero
    experiences?: Array<Milestone>
}