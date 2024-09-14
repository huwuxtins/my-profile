'use client'

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import moment from "moment";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function BlogsPage() {

    const router = useRouter()
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const fetcher = async () => {
            const response = await axios.get('/api/blog/all-blogs')
                .then(value => {
                    setBlogs(value.data)
                    return value.data
                })
                .catch(err => {
                    console.log(err)
                    return err
                })
        }

        fetcher()
    }, [])

    return (
        <div className="flex flex-col-reverse lg:flex-row mx-auto max-w-2xl items-start px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 bg-white dark:bg-gray-800 ">
            <div className="w-full">
                <div className="flex flex-col-reverse m-2 items-start sm:flex-row sm:items-center justify-between">
                    <button
                        type="button"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mb-2"
                        onClick={() => router.push('/blog/add-blog')}
                    >
                        Add blog
                    </button>
                    <div className="relative mb-2">
                        <input
                            type="text"
                            name="query-text"
                            id="query-text"
                            autoComplete="given-name"
                            placeholder="Search"
                            className="dark:bg-gray-800 block w-full rounded-full border-0 pl-10 pr-4 py-2 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3  
                            flex items-center  
                            pointer-events-none"
                        >
                            <FontAwesomeIcon icon={faSearch} color={'gray'} />
                        </div>
                    </div>
                </div>
                {blogs.map((post) => (
                    <article key={post?.id} className="flex flex-col items-start justify-between rounded-lg m-2 p-2 border-2">
                        <div className="flex items-center gap-x-4 text-xs">
                            <time dateTime={post?.creatdAt} className="text-gray-500 dark:text-white">
                                {moment().format("MMMM Do YYYY")}
                            </time>
                            {/* <Link
                                href={post?.category?.href}
                                className="relative z-10 rounded-full bg-gray-50 dark:bg-gray-800 px-3 py-1.5 font-medium text-gray-600 dark:text-white hover:bg-gray-100"
                            >
                                {post?.category?.title}
                            </Link> */}
                        </div>
                        <div className="group relative">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600 dark:text-white">
                                <Link href={`/blog/${post?.id}`}>
                                    <span className="absolute inset-0" />
                                    {post?.title}
                                </Link>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-white">{post?.content}</p>
                        </div>
                        <div className="relative mt-8 flex items-center gap-x-4">
                            <img src={post?.author?.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                            <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900 dark:text-white">
                                    <Link href={`/view/${post?.author?.id}`}>
                                        <span className="absolute inset-0" />
                                        {post?.author?.name}
                                    </Link>
                                </p>
                                <p className="text-gray-600 dark:text-white">{post?.author?.role}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default BlogsPage;