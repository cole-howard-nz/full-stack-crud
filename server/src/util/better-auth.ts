/*
 *   Utility function for interacting with Better Auth API
 */

import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"
import { prisma } from "../client"

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: [process.env.CLIENT_BASE_URL || "http://localhost:5173"], 
  baseURL: process.env.BASE_URL || "http://localhost:4120",
})

export default auth