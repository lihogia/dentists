import { Pool, neonConfig } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'
import { PrismaClient } from '@prisma/client'
const connectionString = `${process.env.DATABASE_URL}`

const pool = new Pool({ connectionString })
const adapter = new PrismaNeon(pool)

declare global {
    var prismaEdge: PrismaClient;
}
const prismaEdge = new PrismaClient({ adapter });

export const dbEdge = globalThis.prismaEdge || prismaEdge;

if (process.env.NODE_ENV != "production") globalThis.prismaEdge = dbEdge;