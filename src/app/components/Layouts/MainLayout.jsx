// COMPONENTS
import FooterBlock from "../Footer/FooterBlock";
import NavBar from "../Nav/NavBar";

export default function MainLayout({ children }){
    return (
        <>
            <NavBar />
                <main className="min-h-screen pt-20">
                    {children}
                </main>
            <FooterBlock />
        </>
    )
}