import React from 'react'
import { 
    HeroContent, 
    ProjectsContent, 
    PostsContent,
    Posts,
    Projects
} from './types'

type PageProps = {
    hero: HeroContent
    posts: PostsContent
    projects: ProjectsContent & Projects
}

const Page: React.FC<PageProps> = async (props) => {
    const { 
        hero, 
        posts, 
        projects 
    } = props
    const latestPosts: Posts = []
    const featuredProjects: Projects = []

    return (
        <div>


        </div>
    )
}

export default Page