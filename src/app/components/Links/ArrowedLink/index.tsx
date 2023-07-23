'use client'

import { useState } from 'react'
import Arrow from '../Arrow'
import { joinClassNames } from '@/utilities/joinClassNames'
import styles from './index.module.scss'

type Props = {
    text?: string
    link?: string
    classes?: string 
    external?: boolean
}

export const ArrowedLink: React.FC<Props> = ({ text, link, external, classes}) => {
    const [isHovered, setHovered] = useState(false)

    return (
        <a 
            href={link}
            target={external ? '_blank': '_self'}
            className={joinClassNames([styles.default, classes ?? ''])}
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
        >
            {text}
            <Arrow isHovered={isHovered} />
        </a>
    )
}