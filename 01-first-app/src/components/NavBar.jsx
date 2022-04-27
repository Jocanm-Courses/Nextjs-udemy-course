import Link from 'next/link'
import { ActiveLink } from './ActiveLink'
import styles from './Navbar.module.css'

export const NavBar = () => {

    return (
        <nav className={styles.nav}>
            <ActiveLink
                text="Home"
                route="/"
            />
            <ActiveLink
                text="About"
                route="/about"
            />
            <ActiveLink
                text="Blog"
                route="/blog"
            />
        </nav>
    )
}
