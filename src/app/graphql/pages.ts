import {
    HOME_PAGE,
    RESOURCES_PAGE,
    WORK_EXPERIENCE_PAGE,
    PROJECTS_PAGE,
} from './blocks'

export const PAGES = `
    query Pages {
        Pages(limit: 300) {
            docs {
                slug
            }
        }
    }
`

export const PAGE = `
    query Page($slug: String) {
        Pages(where: { slug: { equals: $slug } }) {
            docs {
                id
                title
                loadTemplate
                template {
                    ${HOME_PAGE}
                    ${WORK_EXPERIENCE_PAGE}
                    ${PROJECTS_PAGE}
                    ${RESOURCES_PAGE}
                }
            }
        }
    }
`