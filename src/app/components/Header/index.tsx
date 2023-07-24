'use client' 
import React, { useState, useEffect } from 'react'
import Hamburger from './Hamburger'
import NavigationLinks from './NavigationLinks'
import Socials from './Socials'
import {
    Menu,
    Socials as SocialsType
} from './types'

type Props = {
    menu: Menu
    socials: SocialsType
}

import styles from './index.module.scss'

const Header: React.FC<Props> = (props) => {
    const [toggle, setToggle] = useState(false)
    const [breakpoint, setBreakpoint] = useState() 
    const { menu, socials } = props
    
    const breakpointObserver = function() {
        matchMediaQuery(breakpoints, setBreakpoint)
    }

    useEffect(() => {
        matchMediaQuery(breakpoints, setBreakpoint)
        window.addEventListener('resize', breakpointObserver)
        if(breakpoint !== 'mobile') setToggle(false)
        return () => window.removeEventListener('resize', breakpointObserver)
    })
    return (
        <header>
            <span className={`${styles.menu__bg} ${toggle ? styles.bg__active : styles.bg__inactive}`}></span>
            <nav>
                <div className={styles.navbar}>
                    <a className={styles.nav__home} href={process.env.NEXT_PUBLIC_SITE_URL + '/'}>Malan Gunaratne</a>
                    <Hamburger toggle={toggle} setToggle={setToggle} />
                </div>
                <div className={`${styles.menu__mobile} ${toggle ? styles.menu__active : styles.menu__inactive}`}>
                    <NavigationLinks menu={menu}/>
                    <div className={styles.contact}>
                            <Socials socials={socials.socials}/>
                            <a href="mailto:contact@malandev.com">contact@malandev.com</a>
                    </div>
                </div>
                <div className={styles.menu__desktop}>
                    <NavigationLinks menu={menu}/>
                </div>
            </nav>
        </header>
    )
}

const breakpoints = {
    mobile: "(max-width: 700px)",
    desktop: "(min-width: 700px)"
}

function matchMediaQuery(breakpoints: any, setBreakpoint: any) {
    for (const key of Object.keys(breakpoints)) {
        if(window.matchMedia(`${breakpoints[key]}`).matches) {
            setBreakpoint(key)
        }
    }
}

export default Header