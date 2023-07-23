import React from 'react'

import styles from './index.module.scss'

type HamburgerProps = {
    toggle: boolean
    setToggle: (open: boolean) => void
}

const Hamburger: React.FC<HamburgerProps> = ({ toggle, setToggle }) => {
    function handleToggle() {
        setToggle(!toggle)
    }

    return (
        <div className={styles.hamburger}>
            <button className={styles.toggle} onClick={handleToggle}>
                <span className={`${styles.line1} ${toggle && styles.line1__open}`}></span>
                <span className={`${styles.line2} ${toggle && styles.line2__open}`}></span>
            </button>
        </div>
    )
}

export default Hamburger