import { Open_Sans, Sofia_Sans } from "next/font/google";
import "./globals.css";

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
        <body className={`${font.variable} antialiased container mx-auto max-w-[1440px] overflow-x-hidden`}>
            {children}
        </body>
        </html>
    );
}
