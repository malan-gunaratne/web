
import {
    PROJECTS
} from './projects'

export const HOME_PAGE = `
...on HomePage {
    blockType
    hero {
        heading
        subheading
        introductionHeading
        introductionBody
        pageLinkLabel
        pageLink
    }
    posts {
        heading
        subheading
        viewAllBtn
    }
    featuredProjects {
        heading
        subheading
        projects ${PROJECTS}
        viewAllBtn
    }
}
`

export const PROJECTS_PAGE = `
...on ProjectsPage {
    blockType

}
`

export const POSTS_PAGE = `
...on PostsPage {
    blockType

}
`

export const EXPERIENCES_PAGE = `
...on ExperiencesPage {
    blockType
}
`