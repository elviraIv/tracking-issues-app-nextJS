import {PrismaClient} from '@prisma/client'

const PrismaClientSingleton = () => {
    return new PrismaClient()
}

type PrismaClientSingleton = ReturnType <typeof PrismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClientSingleton | undefined
}

export const prisma = globalForPrisma.prisma ?? PrismaClientSingleton()

