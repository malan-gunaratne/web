import {
    HOME_PAGE,
    POSTS_PAGE,
    EXPERIENCES_PAGE,
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
                    ${EXPERIENCES_PAGE}
                    ${POSTS_PAGE}
                    ${PROJECTS_PAGE}
                }
            }
        }
    }
`
