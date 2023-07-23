import { MEDIA_FIELDS } from "./media"

export const PROJECTS = `
    query Projects {
        Projects(limit: 300) {
            docs {
                title
                isComplete
                completionDate
                slug
            }
        }
    }
`

export const FEATURED_PROJECT = `{
    title
    completionDate
    slug
}`

export const PROJECT = `
    query Project($slug: String) {
        Projects(where: { slug: { equals: $slug } }) {
            docs {
                title
                isComplete
                completionDate
                description
                skills {
                    title
                }
            }
        }
    }
`