import NavBar from "./components/Nav/NavBar";
import Hero from "./components/Hero/Hero"
import NewsBlock from "./components/News/NewsBlock";
import GoalsBlock from "./components/Goals/GoalsBlock"

export default function Home(){
    return (
        <>
            <NavBar />
            <Hero />
            <NewsBlock />
            <GoalsBlock />
        </>
    );
}
