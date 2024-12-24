// COMPONENTS
import CatalogPage from "../components/Catalog/CatalogPage";
import Hero from "../components/Hero/Hero";
import MainLayout from "../components/Layouts/MainLayout";

export default function Catalog(){
    return (
        <>
            <MainLayout>
                <Hero />
                <CatalogPage />
            </MainLayout>
        </>
    )
}