import { LINK_FIELDS } from './link'
import { MEDIA_FIELDS } from './media'

export const GLOBALS = `
    query {
        MainMenu {
            menuItems {
                link ${LINK_FIELDS}
            }
        }
        Social {
            socials {
                platform {
                    name
                    link
                    svg ${MEDIA_FIELDS}
                }
            }
        }
    }
`

export const SOCIALS = `
    query {
        Social {
            socials {
                platform {
                    name
                    link
                    svg ${MEDIA_FIELDS}
                }
            }
        }
    }
`