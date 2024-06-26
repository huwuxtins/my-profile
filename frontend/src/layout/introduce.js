'use client'

import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons"
import LinkButton from "../components/button/link_button"
import { faComment, faUserPlus, faUserTag } from "@fortawesome/free-solid-svg-icons"
import CountUp from 'react-countup'

const features = [
    { name: 'Fullname', description: 'Nguyen Huu Tin' },
    { name: 'Age', description: '20' },
    { name: 'Gender', description: 'Male' },
    { name: 'Address', description: 'Binh Chanh districts, Ho Chi Minh City' },
    { name: 'Github', description: 'https://github.com/huwuxtins' },
    { name: 'Emal', description: 'nguyenhuutin124@gmail.com' },
]

const stats = [
    { id: 1, name: 'Followers', value: '44' },
    { id: 3, name: 'Friends', value: '46000' },
  ]

export default function Introduce() {
    return (
        <div className="bg-white dark:bg-gray-800">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="rounded-lg bg-gray-100"
                    />
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Information</h2>
                    <p className="mt-4 text-gray-900 dark:text-white">
                        Nguyen Huu Tin
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900 dark:text-white">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-900 dark:text-white">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
                    <div className="bg-white py-8 sm:py-16">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <dl className="grid grid-cols-2 gap-x-8 gap-y-16 text-center">
                                {stats.map((stat) => (
                                    <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                        <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                            <CountUp start={0} end={stat.value} duration={3} ecimals={4} decimal=","/>
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className="flex flex-row my-10 grid-cols-3 justify-center">
                    <LinkButton width={'200px'} height={'50px'} icon={faUserTag} name={'Followers'} color={'bg-rose-700'} hoverColor={'hover:bg-rose-400'} sizeIcon={'50px'} />
                        <LinkButton width={'200px'} height={'50px'} icon={faUserPlus} name={'Add friend'} color={'bg-blue-700'} hoverColor={'hover:bg-blue-400'} sizeIcon={'50px'} />
                        <LinkButton width={'200px'} height={'50px'} icon={faComment} name={'Chat'} color={'bg-gray-800'} hoverColor={'hover:bg-gray-400'} sizeIcon={'50px'} />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">Introduce</h2>
                    <p className="mt-4 text-gray-900 dark:text-white">
                        The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
                        steel divider separates active cards from new ones, or can be used to archive important task lists.
                        <r />
                        The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
                        steel divider separates active cards from new ones, or can be used to archive important task lists.
                    </p>
                    {/* <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        className="rounded-lg bg-gray-100"
                    /> */}
                </div>
            </div>
        </div>
    )
}
