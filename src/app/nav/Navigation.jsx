'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import './nav.css'
export function Navigation({ navLinks }) {
    const pathname = usePathname()

    return (
        <>
            {navLinks.map((link) => {
                const isActive = pathname === link.href

                return (

                    <Link
                        className={isActive ? 'active font-semibold duration-75' : 'font-semibold text-white duration-300 hover:text-[#799aff] '}
                        href={link.href}
                        key={link.name}
                    >
                        {link.name}

                    </Link>
                )
            })}
        </>
    )
}