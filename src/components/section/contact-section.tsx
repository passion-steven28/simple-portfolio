import { Handshake } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const ContactSection = () => {
    return (
        <div className={cn('flex flex-col items-center justify-center gap-4 px-20 w-full h-screen bg-[url("/bg.svg")] bg-no-repeat bg-cover')}>
            <div className='size-32 flex justify-center items-center rounded-full border-4 border-neutral-900 dark:border-neutral-600 bg-neutral-50/10 backdrop-blur-md'>
                <Handshake size={40} />
            </div>

            <h1 className='text-center text-6xl font-bold tracking-tight text-white'>
                Tell me about your next project!
            </h1>

            <div className='flex items-center justify-center gap-4 mt-10 w-full'>
                <Button>
                    <Link href='mailto:passionsteven28@gmail.com'>
                        Email
                    </Link>
                </Button>
                <Button>
                    <Link href='https://wa.me/255747776063'>
                        WhatsApp
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default ContactSection
