export const RESOURCES = `
    query Resources {
        Resources(limit: 300) {
            docs {
                title
                createdAt
                slug
            }
        }
    }
`

export const RESOURCE = `
    query Resource($slug: String) {
        Resources(where: { slug: { equals: $slug } }) {
            docs {
                title
                createdAt
                description
                source {
                    title
                    link
                }
            }
        }
    }
`