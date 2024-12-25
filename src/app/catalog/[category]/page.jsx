// COMPONENTS
import CatalogItems from "@/app/components/Catalog/CatalogItems";
import Hero from "@/app/components/Hero/Hero";
import MainLayout from "@/app/components/Layouts/MainLayout";
// DATA

export default async function CatalogCategory(){
    return (
        <>
            <MainLayout>
                <Hero />
                <CatalogItems />
            </MainLayout>
        </>
    )
}