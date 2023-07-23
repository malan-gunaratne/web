type Hero = {
    heading?: String
    subheading?: String
}

export type PageProps = {
    heroContent?: Hero
    status?: string
}

type Media = {
    mimeType?: string
    alt?: string
    filename?: string
    filesize?: number
    url?: string
    width?: number
    height?: number
}

type Platform = {
    name?: string
    link?: string
    svg?: Media | string
}

export type Social = {
    id?: string
    platform?: Platform
} 