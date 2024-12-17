import Hero from "../components/Hero/Hero";
import MainLayout from "../components/Layouts/MainLayout";
import NewsPage from "../components/NewsPage/NewsPage";

export default function News(){
    return (
        <>
            <MainLayout>
                <Hero />
                <NewsPage />
            </MainLayout>
        </>
    )
}