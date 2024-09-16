import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const navLinks = [
    {
        name: 'linkedin',
        href: 'https://www.linkedin.com/in/sanjana-airlines/',
        icon: 'LinkedIn'
    },
    {
        name: 'github',
        href: 'https://github.com/sanjana-airlines',
        icon: 'Github'
    },
    {
        name: 'twitter',
        href: 'https://twitter.com/sanjana_airlines',
        icon: 'Twitter'
    },
    {
        name: 'instagram',
        href: 'https://www.instagram.com/sanjana_airlines/',
        icon: 'Instagram'
    },
    {
        name: 'facebook',
        href: 'https://www.facebook.com/sanjana.airlines/',
        icon: 'Facebook'
    },
    {
        name: 'youtube',
        href: 'https://www.youtube.com/channel/UC-0-w-5-2-1-3',
        icon: 'Youtube'
    }
]

const NavBar = () => {
    return (
        <div className='flex items-center justify-around w-full h-16 backdrop-blur-lg bg-black/30 py-2 px-4 shadow-md'>
            <Button>CV</Button>
            <div className='flex items-center space-x-4'>
                {navLinks.map((link) => (
                    <Link key={link.name} href={link.href}>
                        <h1>{link.name}</h1>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default NavBar
