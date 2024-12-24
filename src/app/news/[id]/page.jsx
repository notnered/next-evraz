// COMPONENTS
import ExtendedNewsPage from '../../components/NewsPage/ExtendedNewsPage';
import Hero from '../../components/Hero/Hero';
import MainLayout from '../../components/Layouts/MainLayout';
import NewsPage from '../../components/NewsPage/NewsPage';

export default async function News({ params }){
    const { id } = await params;
    return (
        <>
            <MainLayout>
                <Hero />
                <ExtendedNewsPage id={id} />
            </MainLayout>
        </>
    )
}