import ErrorPage from "./components/Error/ErrorPage"
import MainLayout from "./components/Layouts/MainLayout"

export default function NotFound(){
    return (
        <>
            <MainLayout>
                <ErrorPage />
            </MainLayout>
        </>
    )
}