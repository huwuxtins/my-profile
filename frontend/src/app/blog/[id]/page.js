'use client'

import { faShare, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import LinkButton from "~/components/button/link_button";
import Comment from "~/components/comment";

function BlogPage({ children }) {
    const params = useParams()

    const [blog, setBlog] = useState(
        {
            blog: {
                id: 1,
                title: 'Boost your conversion rate',
                href: '/blog',
                content: 'hình hệ thống phân nhãn học máy',
                date: 'Mar 16, 2020',
                creatdAt: '2020-03-16',
                category: { title: 'Marketing', href: '#' },
            },
            author: {
                id: 2,
                name: 'Michael Foster',
                href: '/view',
                imageUrl:
                    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        }
    )

    useEffect(() => {
        const fetcher = async () => {
            const response = await axios.get(`/api/blog/${params.id}`)
            setBlog(response.data)

            return response.data
        }

        fetcher()
    }, [params.id])

    const comments = [
        {
            id: "48193c46-654c-460d-99c1-92a7550c5aa8",
            userID: "48193c46-654c-460d-99c1-92a7550c5aa6",
            username: "Nguyen Huu Tin",
            createdAt: "2020-12-24",
            content: "This is comment",
            replyComment: {
                id: "48193c46-654c-460d-99c1-92a7550c5aa9",
                userID: "48193c46-654c-460d-99c1-92a7550c5aa7",
                replyComment: "48193c46-654c-460d-99c1-92a7550c5aa8",
                username: "Nguyen Huu Tin",
                createdAt: "2020-12-24",
                content: "This is comment",
            }
        },
        {
            id: "48193c46-654c-460d-99c1-92a7550c5aa1",
            userID: "48193c46-654c-460d-99c1-92a7550c5aa5",
            username: "Nguyen Huu Tin",
            createdAt: "2020-12-24",
            content: "This is comment",
        },
    ]
    return (
        <div className="bg-white dark:bg-gray-800 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            className="rounded-lg bg-white"
                            width={'400px'} height={'200px'}
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
                        <div className="flex justify-center">
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                                className="rounded-full bg-white"
                                width={'200px'} height={'200px'}
                            />
                        </div>
                        <div className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-2xl text-center">{blog.author?.name}</div>
                        <div className="flex -space-x-1 justify-center">
                            <img
                                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            <img
                                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            <img
                                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                alt=""
                            />
                            <img
                                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className="bg-white dark:bg-gray-800 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex flex-row justify-between">
                    <div className="flex items-center">
                        <img src={blog.author?.imageUrl}
                            alt="" className="h-10 w-10 flex-shrink-0 rounded-full mr-5" />
                        <span
                            className='font-semibold text-2xl text-gray-800 dark:text-gray-200'
                        >
                            {blog.author?.name}
                        </span>
                    </div>
                    <div className="flex flexr-row justify-between">
                        <LinkButton width={'150px'} height={'50px'} icon={faThumbsUp} name={'Like'} number={'10'} color={'bg-sky-700'} hoverColor={'hover:bg-sky-400'} sizeIcon={'50px'} />
                        <LinkButton width={'150px'} height={'50px'} icon={faShare} name={'Share'} color={'bg-orange-700'} hoverColor={'hover:bg-orange-400'} sizeIcon={'50px'} />
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-gray-800 mx-auto max-w-2xl items-start px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <span className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-6xl">{blog.blog?.title}</span>
                <div></div>
            </div>
            <div className="bg-white dark:bg-gray-800 mx-auto  max-w-2xl px-4 py-24 sm:px-6 sm:py-12 lg:max-w-7xl border-b-2 text-gray-900 dark:text-gray-200" dangerouslySetInnerHTML={{ __html: blog.blog?.content }}></div>
            <div className="bg-white dark:bg-gray-800 mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-12 lg:max-w-7xl text-right border-b-2">
                <span className="text-xl font-bold text-right text-gray-900 dark:text-gray-200">{blog.author?.name}</span>
            </div>
            {/* Comment section */}
            <div className="bg-white dark:bg-gray-800 mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-12 lg:max-w-7xl">
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
                        Comment
                    </label>
                    <div className="mt-2.5">
                        <textarea
                            name="message"
                            id="message"
                            rows={4}
                            className="block w-full rounded-md border-0 px-3.5 py-2 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            defaultValue={''}
                        />
                    </div>
                </div>
                <div className="my-10 rounded-lg border-2 overflow-auto max-h-100">
                    {comments.map((comment, index) => {
                        return <div key={comment.id} >
                            <Comment comment={comment} />
                            {comment.replyComment ? <Comment comment={comment.replyComment} isReply={true} /> : null}
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default BlogPage;