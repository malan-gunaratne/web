export const PROJECTS = `
    query Projects {
        Projects(limit: 300) {
            docs {
                title
                description
                completionDate
                slug
            }
        }
    }
`