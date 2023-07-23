type Page = {
    slug?: string
}

export type Link = {
    label?: string
    page?: Page | string
}

export type MenuItem = {
    link?: Link
}

export type Menu = {
    menuItems?: Array<MenuItem>
}

export type Props = {
   menu?: Array<MenuItem>
}


export type Platform = {
    name?: string
    link?: string
}

export type Social = {
    platform?: Platform
}

export type Socials = {
    socials?: Array<Social>
}