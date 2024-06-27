import { faComment, faUserPlus, faUserTag } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import LinkButton from "~/components/button/link_button";

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

function BlogsPage() {
    return (
        <div className="flex flex-col-reverse lg:flex-row  mx-auto max-w-2xl items-start px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 bg-white dark:bg-gray-800 ">
            <div className="rounded-lg border-2 p-5 m-2">
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
        </div>
    );
}

export default BlogsPage;