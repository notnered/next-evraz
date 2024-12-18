// COMPONENTS
import Hero from "../components/Hero/Hero"
import MainLayout from "../components/Layouts/MainLayout"
import ContactPage from "../components/Contact/ContactPage"

export default function Contact(){
    return (
        <>
            <MainLayout>
                <Hero />
                <ContactPage />
            </MainLayout>
        </>
    )
}