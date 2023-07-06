export const POSTS = `
    query Posts {
        Posts(limit: 300) {
            docs {
                title
                description
                createdAt
                slug
            }
        }
    }
`