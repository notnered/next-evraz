// COMPONENTS
import CatalogItems from "@/app/components/Catalog/CatalogItems";
import Hero from "@/app/components/Hero/Hero";
import MainLayout from "@/app/components/Layouts/MainLayout";
// DATA
import { queryCategory, queryOneCategory } from "@/database/getQueryOutput";


export default async function CatalogItem(){
    return (
        <>
            <MainLayout>
                <Hero />
                <CatalogItems category={data} />
            </MainLayout>
        </>
    )
}