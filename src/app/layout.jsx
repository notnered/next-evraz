import NavBar from "./components/Nav/NavBar";
import { Open_Sans, Sofia_Sans } from "next/font/google";
import "./globals.css";
import FooterBlock from "./components/Footer/FooterBlock";
import MainLayout from "./components/Layouts/MainLayout";

const font = Open_Sans({
    variable: "--font-family",
    subsets: ["latin"],
});

export const metadata = {
    title: "Евраз-ЗСМК",
    description: "Ознакомительный сайт Западно-Сибирского Металлургического Завода",
};

export const viewport = {
    userScalable: false, 
}

export default function AppLayout({ children }) {
    return (
        <html lang="ru">
        <body className={`${font.variable} antialiased container mx-auto max-w-[1440px] lg:px-2`}>
            {children}
        </body>
        </html>
    );
}
