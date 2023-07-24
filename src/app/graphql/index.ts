import type { 
    MainMenu,
    Social,
    Page,
    Project, 
    Resource,
    Experience
} from '@/payload-types'
import { PAGE, PAGES } from './pages'
import { RESOURCES, RESOURCE } from './resources'
import { PROJECTS, PROJECT } from './projects'
import { EXPERIENCE } from './experiences'
import { GLOBALS, SOCIALS } from './globals'

const next: { revalidate: number } = {
    revalidate: 0
}

export const fetchPage = async (incomingSlugSegments?: string[]): Promise<Page | null> => {
    const slugSegments = incomingSlugSegments ?? ['/']
    const slug = slugSegments.at(-1)
    const { data, errors } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?page=${slug}`, {
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
    const { data, errors } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?pages`, {
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

export const fetchProjects = async (): Promise<Array<Project>> => {
    const { data } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?projects`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        next,
        body: JSON.stringify({ query: PROJECTS })
    }).then(res => res.json())

    return data?.Projects?.docs
}

export const fetchProject = async (slug: String): Promise<Project> => {
    const { data, errors } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?project=${slug}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        next,
        body: JSON.stringify({ 
            query: PROJECT,
            variables: { slug }
        })
    }).then(res => res.json())
    if (errors) {
        console.log(JSON.stringify(errors))
        throw new Error()
    }

    return data?.Projects.docs[0]
}

export const fetchResources = async (): Promise<Array<Resource>> => {
    const { data } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?resources`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        next,
        body: JSON.stringify({ query: RESOURCES })
    }).then(res => res.json())

    return data?.Resources?.docs
}

export const fetchResource = async (slug: String): Promise<Resource> => {
    const { data, errors } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?resource=${slug}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        next,
        body: JSON.stringify({ 
            query: RESOURCE,
            variables: { slug }
        })
    }).then(res => res.json())
    if (errors) {
        console.log(JSON.stringify(errors))
        throw new Error()
    }

    return data?.Resources.docs[0]
}

export const fetchExperience = async (slug: String): Promise<Experience> => {
    const { data, errors } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?experience=${slug}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        next,
        body: JSON.stringify({ 
            query: EXPERIENCE,
            variables: { slug }
        })
    }).then(res => res.json())

    if (errors) {
        console.log(JSON.stringify(errors))
        throw new Error()
    }

    return data?.Experiences.docs[0]
}

export const fetchSocials = async (): Promise<Social> => {
    const { data, errors} = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?socials`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        next,
        body: JSON.stringify({
            query: SOCIALS,
        })
    }).then(res => res.json())

    return data.Social
}

export const fetchGlobals = async (): Promise <{ mainMenu: MainMenu, socialMedias: Social }> => {
    const { data, errors } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?globals`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        next,
        body: JSON.stringify({
            query: GLOBALS,
        }),
    }).then(res => res.json())

    if (errors) {
        console.log(JSON.stringify(errors)) // eslint-disable-line no-console
    }

    return {
        mainMenu: data.MainMenu,
        socialMedias: data.Social
    }
}
