import Link from "next/link";

function Comment({ comment, isReply }) {
    const classReply = isReply? 'ml-20': ''
    return (
        <div className={`flex flex-row p-7 ${classReply}`}>
            <Link href={comment.userID} className="rounded-full mr-10">
                <img
                    src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-full bg-gray-100 hover:bg-gray-500" width={'50px'} height={'50px'}
                />
            </Link>
            <div className="flex flex-col min-w-3">
                <div className="rounded-xl p-3 bg-light dark:bg-gray-800 border-2">
                    <div className="font-bold text-base text-black dark:text-gray-200 pb-2.5">
                        {comment.username}
                    </div>
                    <div className="text-base text-gray-600 dark:text-gray-200">
                        {comment.content}
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-100">{comment.createdAt}</span>
                    <div className="flex flex-row justify-between text-sm text-gray-500 dark:text-gray-100">
                        <div className="pr-1 cursor-pointer hover:text-blue-300">Like</div>
                        <div className="pl-1 cursor-pointer hover:text-red-300">Reply</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;