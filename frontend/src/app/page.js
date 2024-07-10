'use client'

import LinkButton from "~/components/button/link_button";
import { faComment, faUserPlus, faUserTag } from "@fortawesome/free-solid-svg-icons";
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import CountUp from 'react-countup'
import Link from "next/link";

export default function Home() {

    const blogs = [
        {
            id: 1,
            title: 'Boost your conversion rate',
            href: '/blog',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
            category: { title: 'Marketing', href: '#' },
            author: {
                id: 2,
                name: 'Michael Foster',
                role: 'Co-Founder / CTO',
                href: '/view',
                imageUrl:
                    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },
        {
            id: 2,
            title: 'Boost your conversion rate',
            href: '/blog',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
            category: { title: 'Marketing', href: '#' },
            author: {
                id: 2,
                name: 'Michael Foster',
                role: 'Co-Founder / CTO',
                href: '/view',
                imageUrl:
                    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },
        {
            id: 3,
            title: 'Boost your conversion rate',
            href: '/blog',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
            category: { title: 'Marketing', href: '#' },
            author: {
                id: 2,
                name: 'Michael Foster',
                role: 'Co-Founder / CTO',
                href: '/view',
                imageUrl:
                    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },
        {
            id: 4,
            title: 'Boost your conversion rate',
            href: '/blog',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
            category: { title: 'Marketing', href: '#' },
            author: {
                id: 2,
                name: 'Michael Foster',
                role: 'Co-Founder / CTO',
                href: '/view',
                imageUrl:
                    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },
    ]

    const companies = [
        {
            id: 'ca1d1f27-a3ca-46da-82b4-008cc02e0ff6',
            name: 'Leslie Alexander',
            email: 'leslie@gmail.com',
            role: 'Co-Founder / CEO',
            period: '1/2020 - 5/2024',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 'ca1d1f27-a3ca-46da-82b4-008cc02e0ff7',
            name: 'Leslie Alexander',
            email: 'leslie123@gmail.com',
            role: 'Co-Founder / CEO',
            period: '1/2020 - 5/2024',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    ]

    const links = [
        { name: 'Open roles', href: '#' },
        { name: 'Internship program', href: '#' },
        { name: 'Our values', href: '#' },
        { name: 'Meet our leadership', href: '#' },
    ]

    const stats = [
        { name: 'Users', value: '12' },
        { name: 'Blogs', value: '300' },
        { name: 'Blogs per week', value: '40' },
        { name: 'Number of released date', value: '123' },
    ]

    return (
        <div className="">
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                />
                <div
                    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div
                    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Join with us</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            My Profile is a social network which connect thousand of people from many countries in the world.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            {links.map((link) => (
                                <a key={link.name} href={link.href}>
                                    {link.name} <span aria-hidden="true">&rarr;</span>
                                </a>
                            ))}
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.name} className="flex flex-col-reverse">
                                    <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white"><CountUp start={0} end={stat.value} duration={2} /></dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row mx-auto max-w-2xl items-start px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 bg-white dark:bg-gray-800 ">
                <div className="basis-2/3 rounded-lg border-2 p-5 m-2">
                    {blogs.map((post) => (
                        <article key={post.id} className="flex flex-col items-start justify-between rounded-lg m-2 p-2 border-2">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.datetime} className="text-gray-500 dark:text-white">
                                    {post.date}
                                </time>
                                <Link
                                    href={post.category.href}
                                    className="relative z-10 rounded-full bg-gray-50 dark:bg-gray-800 px-3 py-1.5 font-medium text-gray-600 dark:text-white hover:bg-gray-100"
                                >
                                    {post.category.title}
                                </Link>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600 dark:text-white">
                                    <Link href={`${post.href}/${post.id}`}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-white">{post.description}</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900 dark:text-white">
                                        <Link href={`${post.author.href}/${post.author.id}`}>
                                            <span className="absolute inset-0" />
                                            {post.author.name}
                                        </Link>
                                    </p>
                                    <p className="text-gray-600 dark:text-white">{post.author.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div classNames="flex flex-col basis-1/3 mx-auto max-w-7xl lg:px-8">
                    <div className="mx-auto max-w-7xl lg:px-8 rounded-lg border-2 p-5 m-2">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Can you know</h2>
                        <ul role="list" className="divide-y divide-gray-100">
                            {companies.map((company) => (
                                <li key={company.email} className="flex flex-col justify-between gap-x-6 py-5">
                                    <div className="flex justify-between gap-x-6 py-5">
                                        <div className="flex min-w-0 gap-x-4">
                                            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={company.imageUrl} alt="" />
                                            <div className="min-w-0 flex-auto">
                                                <Link href={`/view/${company.id}`} className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">{company.name}</Link>
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
                                    </div>
                                    <div className="flex flex-col justify-between md:flex-row items-center">
                                        <LinkButton width={'200px'} height={'50px'} icon={faUserPlus} name={'Add friend'} color={'bg-blue-700'} hoverColor={'hover:bg-blue-400'} sizeIcon={'50px'} />
                                        <LinkButton width={'200px'} height={'50px'} icon={faUserTag} name={'Followers'} color={'bg-rose-700'} hoverColor={'hover:bg-rose-400'} sizeIcon={'50px'} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mx-auto max-w-7xl lg:px-8 rounded-lg border-2 p-5 m-2">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Friends</h2>
                        <ul role="list" className="divide-y divide-gray-100">
                            {companies.map((company) => (
                                <li key={company.email} className="flex flex-col justify-between gap-x-6 py-5">
                                    <div className="flex justify-between gap-x-6 py-5">
                                        <div className="flex min-w-0 gap-x-4">
                                            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={company.imageUrl} alt="" />
                                            <div className="min-w-0 flex-auto">
                                                <Link href={`/view/${company.id}`} className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">{company.name}</Link>
                                                <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-200">{company.email}</p>
                                            </div>
                                        </div><LinkButton width={'200px'} height={'50px'} icon={faComment} name={'Chat'} color={'bg-gray-800'} hoverColor={'hover:bg-gray-400'} sizeIcon={'50px'} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
                            <p className="mt-4 text-lg leading-8 text-gray-300">
                                Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
                                dolore.
                            </p>
                            <div className="mt-6 flex max-w-md gap-x-4">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                    placeholder="Enter your email"
                                />
                                <button
                                    type="submit"
                                    className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
                                <dd className="mt-2 leading-7 text-gray-400">
                                    Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                                </dd>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <dt className="mt-4 font-semibold text-white">No spam</dt>
                                <dd className="mt-2 leading-7 text-gray-400">
                                    Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                    <div
                        className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
