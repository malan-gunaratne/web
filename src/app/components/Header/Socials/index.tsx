import React from 'react'
import { Props, Social } from './types'
import styles from './index.module.scss'

const Socials: React.FC<Props> = (props) => {
    const socials: Social[] | undefined = props?.socials

    return (
        <div className={styles.socials}>
            {
                socials?.map((social: Social) => (
                    <a href={social.platform?.link} 
                       key={social.platform?.name}>
                        {social.platform?.name}
                    </a>
                ))
            }
        </div>
    )
}

export default Socials