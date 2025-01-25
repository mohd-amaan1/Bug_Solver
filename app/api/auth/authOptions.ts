import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prisma/client"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt"
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "email", type: "email", placeholder: "jsmith@example.com" },
          password: { label: "Password", type: "password", placeholder: "password" }
        },
        async authorize(credentials, req) {
          if (!credentials?.email || !credentials.password) return null;
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email
            }
          })
          if (!user) return null;
          const passwordMatch = await bcrypt.compare( credentials.password, user.hashedPassword!);
          return passwordMatch ? user : null;
        }
      }),
      GoogleProvider({ 
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
    ],
    session: {
      strategy: 'jwt'
    }
  };