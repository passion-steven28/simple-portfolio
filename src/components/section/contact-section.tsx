import { Handshake } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import ShimmerButton from '../magicui/shimmer-button'

const ContactSection = () => {
    return (
        <div className={cn('flex flex-col items-center justify-center gap-4 px-20 w-full h-screen bg-[url("/bg.svg")] bg-no-repeat bg-cover')}>
            <div className='size-32 flex justify-center items-center rounded-full border-4 border-neutral-900 dark:border-neutral-600 bg-neutral-50/10 backdrop-blur-md'>
                <Handshake size={40} />
            </div>

            <h1 className='text-center text-xl md:text-6xl font-bold tracking-tight text-white'>
                Tell me about your next project!
            </h1>

            <div className='flex items-center justify-center gap-4 mt-10 w-full'>
                {btn('Email', 'mailto:passionsteven28@gmail.com')}
                {btn('WhatsApp', 'https://wa.me/255747776063')}
            </div>
        </div>
    )
}

export default ContactSection

const btn = (name: string, href: string) => {
    return (
        <ShimmerButton className="shadow-2xl">
            <Link href={href}>
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                {name}
                </span>
            </Link>
        </ShimmerButton>
    )
}
