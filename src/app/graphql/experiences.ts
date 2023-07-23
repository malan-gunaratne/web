export const EXPERIENCE = `
    query Experience($slug: String) {
        Experiences(where: { slug: { equals: $slug } }) {
            docs {
                title
                skills {
                    title
                }
                description
                startDate
                endDate
            }
        }
    }
`