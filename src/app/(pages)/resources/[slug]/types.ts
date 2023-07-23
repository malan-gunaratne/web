export type PageProps = {
    params: {
        slug: string
    }
}

type Source = {
    title?: string
    link?: string
}

export type Resource = {
    title?: string
    createdAt?: string
    description?: string
    source?: Source 
}