import { handleAuth, handleLogin, handleCallback, handleLogout, handleProfile } from '@auth0/nextjs-auth0';

export const GET = handleAuth();

export const POST = handleAuth({
    async login(req, res) {
        try {
            await handleLogin(req, res, {
                authorizationParams: {
                    audience: process.env.AUTH0_AUDIENCE, // Add your audience
                    scope: 'openid profile email',
                },
            });
        } catch (error) {
            res.status(error.status || 400).end(error.message);
        }
    },
});

export const PUT = async (req, res) => {
    res.status(405).end("Method Not Allowed");
};

export const DELETE = handleAuth({
    async logout(req, res) {
        try {
            await handleLogout(req, res);
        } catch (error) {
            res.status(error.status || 500).end(error.message);
        }
    },
});
