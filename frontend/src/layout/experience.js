const companies = [
    {
        name: 'Leslie Alexander',
        email: 'leslie@gmail.com',
        role: 'Co-Founder / CEO',
        period: '1/2020 - 5/2024',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Leslie Alexander',
        email: 'leslie123@gmail.com',
        role: 'Co-Founder / CEO',
        period: '1/2020 - 5/2024',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

export default function Experience() {
    return (
        <div className="bg-white dark:bg-gray-800 py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
                <div className="max-w-2xl">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Experience</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
                        Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                        suspendisse.
                    </p>
                </div>
                <ul role="list" className="divide-y divide-gray-100">
                    {companies.map((company) => (
                        <li key={company.email} className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={company.imageUrl} alt="" />
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">{company.name}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-200">{company.email}</p>
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-900 dark:text-white">{company.role}</p>
                                <div className="mt-1 flex items-center gap-x-1.5">
                                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                    </div>
                                    <p className="text-xs leading-5 text-gray-500 dark:text-gray-200">{company.period}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
