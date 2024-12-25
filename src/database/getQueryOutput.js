import prisma from './prismaClient';

export const queryNews = async (searchParams = {}) => {
    let query = searchParams;
    let options = {
        orderBy: {
            createdAt: 'desc',
        },
        ...query
    };
    try {
        const queryOutput = await prisma.news.findMany(options);
        return queryOutput;
    } catch (error) {
        console.error(error);
    } finally {
        prisma.$disconnect();
    };
};

export const queryAllNews = async () => {
    try {
        const queryOutput = await prisma.news.findMany();
        return queryOutput;
    } catch (error) {
        console.error(error)
    } finally {
        prisma.$disconnect
    };
};

export const queryOneNews = async (searchParams = {}) => {
    let query = searchParams;
    let options = {
        where: {
            id: Number(query)
        }
    };
    try {
        const queryOutput = await prisma.news.findUnique(options);
        return queryOutput;
    } catch (error) {
        console.error(error);
    } finally {
        prisma.$disconnect;
    };
};

export const queryCategory = async(searchParams = {}) => {
    let query = searchParams;
    let options = {
        orderBy: {
            createdAt: 'asc',
        },
        ...query
    }
    try {
        const queryOutput = await prisma.catalog_category.findMany(options);
        return queryOutput;
    } catch (error) {
        console.error(error);
    } finally {
        prisma.$disconnect;
    }
}

export const queryOneCategory = async(searchParams = {}) => {
    let query = searchParams;
    try {
        const queryOutput = await prisma.catalog_category.findUnique(query);
        return queryOutput;
    } catch (error) {
        console.error(error);
    } finally {
        prisma.$disconnect;
    }
}

export const queryItem = async(searchParams = {}) => {
    let query = searchParams;
    let options = {
        orderBy: {
            createdAt: 'desc',
        },
        ...query
    }
    try {
        const queryOutput = prisma.catalog_item.findMany(options);
        return queryOutput;
    } catch (error) {
        console.error(error);
    } finally {
        prisma.$disconnect;
    }
}