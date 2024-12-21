// COMPONENTS
import FooterBranding from "./FooterBranding";
import FooterSocials from "./FooterSocials";
import FooterMenu from "./FooterMenu";
import BackUpBtn from "../Nav/BackUpBtn";
// DATA
const footerMenuList = [
    {id: 1, title: 'Карта сайта', link: '#'},
    {id: 2, title: 'Новостной блок', link: '/news'},
    {id: 3, title: 'Антикоррупционная политика', link: '#'},
    {id: 4, title: 'Контакты', link: '/contact'},
    {id: 5, title: 'Каталог', link: '/catalog'},
    {id: 6, title: 'Условия пользования', link: '#'},
];
// DATA SLICES
const firstList = footerMenuList.slice(0, 3);
const secondList = footerMenuList.slice(3, footerMenuList.length);

export default function FooterBlock(){
    return (
        <footer className="flex lg:gap-x-16 px-4 lg:px-2 flex-col lg:flex-row py-4">
            <div className="w-full flex flex-col">
                <FooterBranding />
                <FooterSocials />
            </div>
            <div className="w-full flex flex-col">
                <div className="flex flex-col gap-y-1 text-center mb-1 lg:text-left">
                    {firstList.map((element) => {
                        return (
                            <FooterMenu key={element.id} title={element.title} link={element.link} />
                        )
                    })}
                </div>
            </div>
            <div className="w-full flex flex-col">
                <div className="flex flex-col gap-y-1 text-center lg:text-left">
                    {secondList.map((element) => {
                        return (
                            <FooterMenu key={element.id} title={element.title} link={element.link} />
                        )
                    })}
                </div>
            </div>
            <div className="w-fit flex h-full mt-2 justify-end">
                <BackUpBtn />
            </div>
        </footer>
    )
}