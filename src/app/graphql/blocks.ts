export const HOME_PAGE = `
...on HomePage {
    blockType
    heroContent {
        heading
        subheading
    }
    status
}
`

export const PROJECTS_PAGE = `
...on ProjectsPage {
    blockType
    heroContent {
        heading
        subheading
    }
}
`

export const RESOURCES_PAGE = `
...on ResourcesPage {
    blockType
    heroContent {
        heading
        subheading
    }
}
`

export const WORK_EXPERIENCE_PAGE = `
...on WorkExperiencePage {
    blockType
    heroContent {
        heading
        subheading
    }
    experiences {
        experience {
            title
            startDate
            endDate
            slug
            skills {
                title
            }
        }
    }
}
`