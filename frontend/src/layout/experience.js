import { BriefcaseIcon, CalendarIcon, CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/20/solid"
import Link from "next/link"

const experiences = [
    {
        id: '17e8adaa-59c1-4e59-bb9a-b0a8819f8ab5',
        job: 'Back end Developer',
        startDate: '2020-12-24',
        endDate: '2022-12-24',
        minSalary: '1200',
        maxSalary: '2000',
        type: 'Fulltime',
        company: {
            id: '2f28eacf-070b-4563-b9c9-decf8d34235a',
            href: '/',
            name: 'My Profile',
            image: 'https://c8.alamy.com/comp/2AH6RFF/real-estate-company-logo-design-template-blue-house-and-building-concept-construction-architecture-element-apartment-condo-rouded-window-shape-2AH6RFF.jpg',
        }
    },
    {
        id: '17e8adaa-59c1-4e59-bb9a-b0a8819f8ab6',
        job: 'Back end Developer',
        startDate: '2022-12-24',
        endDate: '2024-12-24',
        minSalary: '1200',
        maxSalary: '2000',
        type: 'Fulltime',
        company: {
            id: '2f28eacf-070b-4563-b9c9-decf8d34235b',
            href: '/',
            name: 'My Profile',
            image: 'https://c8.alamy.com/comp/2AH6RFF/real-estate-company-logo-design-template-blue-house-and-building-concept-construction-architecture-element-apartment-condo-rouded-window-shape-2AH6RFF.jpg',
        }
    },
]

export default function Experience() {
    return (
        <div className="bg-white dark:bg-gray-800 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-gray-900/10 pb-12">
                <h2 className="text-4xl font-semibold leading-7 text-gray-900 dark:text-gray-200">Experience</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    We'll always let you know about important changes, but you pick what else you want to hear about.
                </p>

                <div className='rounded-lg border-2'>
                    {experiences.map((experience, index) => {
                        return <div key={experience.id} className='lg:flex lg:items-center lg:justify-between m-10'>
                            <div className="min-w-0 flex-1">
                                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                                    {experience.job}
                                </h2>
                                <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                                    <div className="mt-2 flex items-center text-sm text-gray-500">
                                        <BriefcaseIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        {experience.type}
                                    </div>
                                    <div className="mt-2 flex items-center text-sm text-gray-500">
                                        <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        Remote
                                    </div>
                                    <div className="mt-2 flex items-center text-sm text-gray-500">
                                        <CurrencyDollarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        ${experience.minSalary} &ndash; ${experience.maxSalary}
                                    </div>
                                    <div className="mt-2 flex items-center text-sm text-gray-500">
                                        <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        {experience.startDate} - {experience.endDate}
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row items-center'>
                                <img src={experience.company.image} className='rounded-full mr-1' width={'50px'} height={'50px'} />
                                <Link href={experience.company.href}>{experience.company.name}</Link>
                            </div>
                        </div>
                    })}

                    
                </div>
            </div>
        </div>
    )
}
