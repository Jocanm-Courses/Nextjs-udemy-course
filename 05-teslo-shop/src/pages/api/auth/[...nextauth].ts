import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import { checkUser, validateOrCreateUser } from "../../../database"
export default NextAuth(
    {
        //Providers
        providers: [
            Credentials({
                name: "Custom login",
                credentials: {
                    email: { label: "Correo", type: "email", placeholder: "correo@xxxxx.com" },
                    password: { label: "Contraseña", type: "password", placeholder: "************" },
                },
                authorize: async (credentials) => {
                    const { email, password } = credentials || {}
                    return await checkUser({ email, password })
                }
            }),
            GithubProvider({
                clientId: process.env.GITHUB_ID,
                clientSecret: process.env.GITHUB_SECRET,
            }),
        ],

        // CALLBACKS
        callbacks: {

            jwt: async ({ token, account, user }) => {

                if (account) {
                    token.accessToken = account.access_token

                    switch (account.type) {

                        case "oauth":
                            const { email: oAuthEmail = "", name: oAuthName = "" } = user as any
                            const userOauth = await validateOrCreateUser({ oAuthEmail, oAuthName })
                            token.user = userOauth
                            break;

                        case "credentials":
                            token.user = user
                            break;
                    }
                }

                return token
            },

            session: async ({ session, token, user }) => {

                session.accessToken = token.accessToken;
                session.user = token.user as any;

                return session

            },


        },

        //CUSTOM PAGES
        pages: {
            signIn: "auth/login",
            newUser: "auth/register",
            error: "auth/login",
        },

        session: {
            maxAge: 60 * 60 * 24 * 7, // 1 week,
            strategy: "jwt",
            updateAge: 86400, // 1 week,
        }
    }
)