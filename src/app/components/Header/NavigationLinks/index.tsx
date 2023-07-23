import React from 'react'
import { Props, Menu, MenuItem, Link } from './types'

import styles from './index.module.scss'

const NavigationLinks: React.FC<Props> = (props) => {
    
    const menu: Menu | undefined = props.menu
    return (
        <div className={styles.menu}>
            <a href={process.env.NEXT_PUBLIC_SITE_URL + '/'}>Home</a>
            {
                menu?.menuItems?.map((menuItem: MenuItem, i) => (
                    <a key={i} 
                       //@ts-ignore
                       href={`${process.env.NEXT_PUBLIC_SITE_URL}/${menuItem.link?.page?.slug}`}
                    >{menuItem?.link?.label}</a>
                ))
            }
        </div>
    )
}

export default NavigationLinks