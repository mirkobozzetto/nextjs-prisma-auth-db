import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";

const auhConfig = {
  providers: [],
  adapter: PrismaAdapter(prisma),
} satisfies NextAuthOptions;

export default NextAuth(auhConfig);

// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default NextAuth({
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
// });
