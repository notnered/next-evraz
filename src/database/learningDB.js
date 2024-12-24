const queryDataVid = async () => {
    try {
        const queryOutput = await prisma.users.findMany({
            // Params to select specific rows
            // select: {
            //     firstName: true,
            //     lastName: true
            // },
            // Params to select specific records (ex. name that stars on 'M')
            // where : {
            //     firstName : {
            //         startsWith: 'M',
            //     }
            // }
            // Allows to see TODOS object inside of users object
            include : {
                // todo : true
                // This allows us to see object tag in todo object in user record
                todo : {
                    include : {
                        tag: true
                    }
                }
            }, 
            where : {
                firstName : {
                    startsWith : 'J',
                }
            }
        });
        return queryOutput;
    } catch (error) {
        console.error(error);
    } finally {
        prisma.$disconnect();
    }
};

const queryDataVid2 = async () => {
    try {
        const queryOutput = await prisma.users.findMany({
            select: {
                firstName: true,
                lastName: true,
            }, 
            where: {
                // Now record must include these settings:
                // firstName starts with 'M' AND user IS validated
                // Can replace the word ANd with OR and then logic will be next:
                // firstName starts with 'M' OR user IS validated
                // Also there is NOT condition, so the logic is next:
                // first name MUST NOT start with 'M' and user must not be validated
                AND : [{
                    firstName : {
                        startsWith : 'M',
                    },
                    valitated: true,

                }]
            }
        });
        return queryOutput;
    } catch (error) {
        console.error(error);
    } finally {
        prisma.$disconnect();
    }
};

// Unique allows to query only unique values such as ids
const queryUnique = async () => {
    try {
        const queryOutput = await prisma.users.findUnique({
            where : {
                id : 1
            }
        });
        return queryOutput;
    } catch (error) {
        console.error(error);
    } finally {
        prisma.$disconnect();
    }
};

// GroupBY
const queryGroup = async () => {
    try {
        const queryOutput = await prisma.users.groupBy({
            by : ['validate'],
            _count: true
        });
        return queryOutput;
    } catch (error) {
        console.error(error);
    } finally {
        prisma.$disconnect();
    }
};

// Counts all records in a model
const queryCount = async () => {
    try {
        const queryOutput = await prisma.users.count({
            where: {
                firstName: 'John'
            }
        });
        return queryOutput;
    } catch (error) {
        console.error(error);
    } finally {
        prisma.$disconnect();
    }
};

// aggregate, uses when you wanna see when was first user created in the system, or maybe last user in the system and etc.
// what was a count of created users of specific day, this is the aggregate func
const queryAggregate = async () => {
    try {
        const queryOutput = await prisma.users.aggregate({
            _min: {
                createdAt: true,
            },
            _max: {
                createdAt: true,
            },
            _count: {
                createdAt: true
            }
        });
        return queryOutput;
    } catch (error) {
        console.error(error);
    } finally {
        prisma.$disconnect();
    }
};

const queryOrderBy = async () => {
    try {
        const queryOutput = await prisma.users.findMany({
            where: {
                firstName: true,
            },
            orderBy: [{
                // desc - descending, asc - ascending
                lastName: 'asc',
            }, {
                createdAt: 'desc',
            }]
        });
        return queryOutput;
    } catch (error) {
        console.error(error);
    } finally {
        prisma.$disconnect();
    }
};


const querySkipTake = async () => {
    try {
        const queryOutput = await prisma.users.findMany({    
            skip: 0,
            take: 3,
        })
        return queryOutput;
    } catch (error) {
        console.error(error);
    } finally {
        prisma.$disconnect();
    }
};