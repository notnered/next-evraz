import prisma from './prismaClient';

export const queryNews = async () => {
    try {
        const queryOutput = await prisma.news.findMany();
        return queryOutput;
    } catch (error) {
        console.error(error);
    } finally {
        prisma.$disconnect();
    }
};