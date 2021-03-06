import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'
import { useRouter } from 'next/router'

interface CompProps {
    text: string
    route: string
}

export const ActiveLink = ({ text, route }: CompProps) => {

    const { pathname } = useRouter()

    const isActive = pathname === route

    return (
        <Link href={route}>
            <a className={isActive ? styles.active : ""}>
                {text}
            </a>
        </Link>
    )
}
