import React from 'react'

import styles from './index.module.scss'

type Props = {
    isHovered: boolean
}

export const Arrow: React.FC<Props> = ({ isHovered }) => {
    return (
        <div className={`${styles.arrow} ${isHovered ? styles.hovered : ''}`}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H9.5M9.5 1V9M9.5 1L1 9" stroke="white"/>
            </svg>
        </div>
    )
}

export default Arrow