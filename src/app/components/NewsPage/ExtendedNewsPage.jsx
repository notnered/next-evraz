// COMPONENTS
import NewsDate from '../News/NewsDate';
// DATA
import { queryOneNews } from '@/database/getQueryOutput';
import NewsSectionFull from '../News/NewsSectionFull';

export default async function ExtendedNewsPage(props) {
    const newsData = await queryOneNews(props.id);

    return (
        <div className='my-8 flex flex-col md:flex-row gap-x-10 px-4 lg:px-2'>
            <div className='w-full order-2 md:order-1 md:w-3/4 flex h-fit flex-col gap-y-4 md:gap-y-8'>
                <NewsSectionFull
                    key={newsData.id}
                    title={newsData.title}
                    date={newsData.createdAt.toLocaleDateString('ru-ru')}
                    description={newsData.text}
                />
            </div>
            <div className='w-full order-1 md:order-2 md:w-1/4 flex flex-col'>
                <NewsDate />
            </div>
        </div>
    );
}
