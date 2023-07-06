type Headings = {
    heading: string
    subheading: string
}
type Introduction = {
    introductionHeading: string
    introductionBody: string
}
type WorkExperience = {
    pageLinkLabel: string
    pageLink: string
}
export type HeroContent = Headings & Introduction & WorkExperience
export type PostsContent = Headings & { viewAllBtn: string } 
export type ProjectsContent = Headings & { viewAllBtn: string }

type Post = {
    title: string
    description: string
    createdAt: string
}
export type Posts = Post[]

type Project = {
    title: string
    description: string
    completionDate: string
}
export type Projects = Project[]