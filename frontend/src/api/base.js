import { getSession, getAccessToken } from "@auth0/nextjs-auth0";

export async function getServerSideProps(context) {
    const session = getSession(context);
    const accessToken = await getAccessToken({ req: context.req, res: context.res });

    if (!session || !accessToken) {
        return {
            redirect: {
                destination: '/login', // Redirect to login if not authenticated
                permanent: false,
            },
        };
    }

    return {
        props: { user: userData }, // Pass user data to the component
    };
}