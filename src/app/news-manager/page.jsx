import Hero from "../components/Hero/Hero";
import MainLayout from "../components/Layouts/MainLayout";
import NewsManagerPage from "../components/NewsManager/NewsManagerPage";

export default function NewsManager(){
    return (
        <>
        <MainLayout >
            <Hero />
            <NewsManagerPage />
        </MainLayout>
        </>
    )
}