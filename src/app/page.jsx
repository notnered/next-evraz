// COMPONENTS
import Hero from "./components/Hero/Hero";
import NewsBlock from "./components/News/NewsBlock";
import GoalsBlock from "./components/Goals/GoalsBlock"
import SphereBlock from "./components/Sphere/SphereBlock";
import MainLayout from "./components/Layouts/MainLayout";

export default function Home(){
    return (
        <>
            <MainLayout>
                <Hero />
                <NewsBlock />
                <GoalsBlock />
                <SphereBlock />
            </MainLayout>
            
        </>
    );
}
