import React from 'react'
import Link from 'next/link'
import ShimmerButton from './magicui/shimmer-button'

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
        <div className='flex items-center justify-around w-full h-16 backdrop-blur-lg bg-black/30 py-2 px-4 shadow-md sticky top-0 z-50'>
            <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    CV
                </span>
            </ShimmerButton>
            <div className='flex items-center space-x-4'>
                {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} className='hover:underline'>
                        <h1>{link.name}</h1>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default NavBar
