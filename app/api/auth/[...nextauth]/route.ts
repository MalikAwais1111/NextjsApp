import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";

const authOptions = {
    secret: process.env.AUTH_SECRET,
    providers:[
        Github({
            clientId: process.env.GITHUN_ID!,
            clientSecret: process.env.GITHUN_SECRET!,

        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ]
}
const handler = NextAuth(authOptions)
export {handler as GET , handler as POST}