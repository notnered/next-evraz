import prisma from "./prismaClient";

export const createMessage = async (messageInfo = {}) => {
    let query = messageInfo;
    console.log(query);
    try {
        const results = await prisma.messages.create({
            data: {
                fullName: query.fullName,
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