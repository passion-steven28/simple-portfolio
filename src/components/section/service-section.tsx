import React from 'react'
import { Separator } from '../ui/separator'
import { Card, CardContent } from '../ui/card'
import { Code, Phone, ScissorsSquare, TrendingUp } from 'lucide-react'

const services = [
    {
        name: 'Branding',
        description: 'Design and develop branding materials for your business.',
        icon: <TrendingUp size={40} />
    },
    {
        name: 'Web Design',
        description: 'Create visually appealing and user-friendly websites.',
        icon: <Code size={40} />
    },
    {
        name: 'Mobile App Development',
        description: 'Develop high-quality mobile apps for iOS and Android.',
        icon: <Phone size={40} />
    },
    {
        name: 'UI/UX Design',
        description: 'Create user-friendly interfaces and experiences.',
        icon: <ScissorsSquare size={40} />
    },
]

const ServiceSection = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-4 px-20 w-full h-screen'>
            <h1 className='text-center text-6xl font-bold tracking-tight text-white'>
                Collaborate with brands and agencies to create innovative digital products and services.
            </h1>
            <Separator />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8'>
                {
                    services.map((service) => (
                        <Card key={service.name} >
                            <CardContent className='p-8'>
                                {service.icon}
                                <h1 className='text-2xl font-bold tracking-tight text-white'>{service.name}</h1>
                                <p className='text-sm text-white'>{service.description}</p>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default ServiceSection
