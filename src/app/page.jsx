import NavBar from "./components/Nav/NavBar";
import Hero from "./components/Hero/Hero";
import NewsBlock from "./components/News/NewsBlock";
import GoalsBlock from "./components/Goals/GoalsBlock"
import SphereBlock from "./components/Sphere/SphereBlock";
import FooterBlock from "./components/Footer/FooterBlock";
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
