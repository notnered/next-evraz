import prisma from "./prismaClient";

export const createNews = async (newsInfo = {}) => {
    let query = newsInfo;
    try {
        const results = await prisma.news.create({
            data: {
                title: query.title,
                text: query.text,
            }
        })
        return results;
    } catch (error) {
        console.error(error);
    } finally {
        prisma.$disconnect;
    }
}