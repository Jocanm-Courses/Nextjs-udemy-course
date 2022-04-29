import Link from 'next/link'
import { ActiveLink } from './ActiveLink'
import styles from './Navbar.module.css'

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Blog',
        href: '/blog'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const NavBar = () => {

    return (
        <nav className={styles.nav}>
            {
                menuItems.map(item => (
                    <ActiveLink
                        key={item.text}
                        route={item.href}
                        text={item.text}
                    />
                ))
            }
        </nav>
    )
}
