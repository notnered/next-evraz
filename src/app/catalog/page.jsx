// COMPONENTS
import CatalogPage from "../components/Catalog/CatalogPage";
import Hero from "../components/Hero/Hero";
import MainLayout from "../components/Layouts/MainLayout";
// DATA
import { queryCategory } from "@/database/getQueryOutput";

export default async function Catalog(){
    // const data = await queryCategory();
    return (
        <>
            <MainLayout>
                <Hero />
                <CatalogPage />
            </MainLayout>
        </>
    )
}