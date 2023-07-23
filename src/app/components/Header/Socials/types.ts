type Media = {
    mimeType?: string
    alt?: string
    filename?: string
    filesize?: string
    url?: string
    width?: string
    height?: string
}

type Platform = {
    name?: string
    link?: string
    svg?: Media
}

export type Social = {
    platform?: Platform 
}


export type Props = {
    socials?: Array<Social>
}