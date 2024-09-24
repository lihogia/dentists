import NextAuth, { type DefaultSession } from "next-auth";
import authConfig from "@/auth.config";
import { UserRole } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/app/lib/data/database";
import { getUserById } from "@/app/lib/data/authPrisma";
//import { JWT } from "@auth/core/jwt";

export type ExtendedUser = DefaultSession["user"] & {
    role: UserRole;
};
declare module "next-auth" {
    interface Session {
        user: ExtendedUser;
    }
}
declare module "@auth/core/jwt" {
    interface JWT {
        role: ExtendedUser["role"];
    }
}

export const { 
    handlers: {GET, POST},
    auth,
    signIn,
    signOut,
} = NextAuth({
    callbacks: {
        async session({ token, session }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }
            if (token.role && session.user) {
                session.user.role = token.role;
            }
            return session;
        },
        async jwt({ token }) {
            if (!token.sub) return token;
            const existingUser = await getUserById(token.sub);
            if (!existingUser) return token;
            token.role = existingUser.role;
            return token;
        }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig,
});