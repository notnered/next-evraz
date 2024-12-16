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

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
        <body className={`${font.variable} antialiased container mx-auto max-w-[1440px] px-2`}>
            {children}
        </body>
        </html>
    );
}
