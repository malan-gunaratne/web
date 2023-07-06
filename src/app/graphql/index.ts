import type { 
    Page,
    Project, 
    Post,
} from '@/payload-types'
import { PAGE, PAGES } from './pages'
import { POSTS } from './posts'
import { PROJECTS } from './projects'

const next: { revalidate: number } = {
    revalidate: 1
}

export const fetchPage = async (incomingSlugSegments?: string[]): Promise<Page | null> => {
    const slugSegments = incomingSlugSegments || ['home']
    const slug = slugSegments.at(-1)
    const {
        data,
        errors,
    } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?page=${slug}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            next,
            body: JSON.stringify({
                query: PAGE,
                variables: { slug }
            })
        }
    ).then(res => res.json())

    if (errors) {
        console.log(JSON.stringify(errors)) // eslint-disable-line no-console
        throw new Error()
    }

    return data.Pages.docs[0]
}

export const fetchPages = async (): Promise<Array<{ slug: string }>> => {
    const {
        data,
        errors
    } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?pages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        next,
        body: JSON.stringify({ query: PAGES })
    }).then(res => res.json())

    if (errors) {
        console.log(JSON.stringify(errors)) // eslint-disable-line no-console
        throw new Error()
    }

    return data.Pages.docs
}