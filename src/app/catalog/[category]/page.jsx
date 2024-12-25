// COMPONENTS
import CatalogItems from "@/app/components/Catalog/CatalogItems";
import Hero from "@/app/components/Hero/Hero";
import MainLayout from "@/app/components/Layouts/MainLayout";
// DATA
import { queryCategory, queryOneCategory } from "@/database/getQueryOutput";

export default async function CatalogCategory({params}){
    const category_id = await params;
    const options = {
        where: {
            id: parseInt(category_id.category),
        }
    }
    const data = await queryOneCategory(options);
    return (
        <>
            <MainLayout>
                <Hero />
                <CatalogItems category={data} />
            </MainLayout>
        </>
    )
}