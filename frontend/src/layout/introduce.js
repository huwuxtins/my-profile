import ImageButton from "../components/button/image_button"
import { faGit, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons"
import LinkButton from "../components/button/link_button"

const features = [
    { name: 'Fullname', description: 'Nguyen Huu Tin' },
    { name: 'Age', description: '20' },
    { name: 'Gender', description: 'Male' },
    { name: 'Address', description: 'Binh Chanh districts, Ho Chi Minh City' },
    { name: 'Github', description: 'https://github.com/huwuxtins' },
    { name: 'Emal', description: 'nguyenhuutin124@gmail.com' },
]

export default function Introduce() {
    return (
        <div className="bg-white dark:bg-black">
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
                    <div className="flex flex-row my-10 grid-cols-2 justify-center">
                        <LinkButton width={'150px'} height={'50px'} icon={faYoutube} name={'Youtube'} color={'bg-red-700'} hoverColor={'hover:bg-red-400'} sizeIcon={'50px'} />
                        <LinkButton width={'150px'} height={'50px'} icon={faGithub} name={'Github'} color={'bg-black'} hoverColor={'hover:bg-gray-400'} sizeIcon={'50px'} />
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
