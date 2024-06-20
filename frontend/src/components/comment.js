import Link from "next/link";

function Comment({ comment }) {
    return (
        <div className="flex flex-row justify-between">
            <Link href={comment.userID} className="rounded-full">
                <img
                    src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-full bg-gray-100" width={'100px'} height={'100px'}
                />
            </Link>
        </div>
    );
}

export default Comment;