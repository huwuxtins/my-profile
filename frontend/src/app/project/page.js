import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Comment from '~/components/comment'


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

export default function Example() {
    return (
        <div className="bg-white dark:bg-gray-8000 relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden bg-white dark:bg-gray-800">
                <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">A better workflow</h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700 dark:text-gray-100">
                                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
                                eget aliquam. Quisque id at vitae feugiat egestas.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <div className="flex justify-center">
                        <video className="h-full w-full rounded-lg text-gray-900 dark:text-gray-200" controls autoPlay>
                            <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p className='text-gray-900 dark:text-gray-200'>
                                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                                vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                                erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                                semper sed amet vitae sed turpis id.
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span className='text-gray-900 dark:text-gray-200'>
                                        <strong className="font-semibold text-gray-900 dark:text-gray-200">Push to deploy.</strong> Lorem ipsum, dolor sit amet
                                        consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                                        blanditiis ratione.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span className='text-gray-900 dark:text-gray-200'>
                                        <strong className="font-semibold text-gray-900 dark:text-gray-200">SSL certificates.</strong> Anim aute id magna aliqua
                                        ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span className='text-gray-900 dark:text-gray-200'>
                                        <strong className="font-semibold text-gray-900 dark:text-gray-200">Database backups.</strong> Ac tincidunt sapien
                                        vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                                    </span>
                                </li>
                            </ul>
                            <p className="mt-8 text-gray-900 dark:text-gray-200">
                                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                                fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                                adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                            </p>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200">No server? No problem.</h2>
                            <p className="mt-6 text-gray-900 dark:text-gray-200">
                                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                                Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                                tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                                turpis ipsum eu a sed convallis diam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
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
