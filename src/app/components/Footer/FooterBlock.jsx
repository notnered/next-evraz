import FooterBranding from "./FooterBranding";
import FooterSocials from "./FooterSocials";
import FooterMenu from "./FooterMenu";
import BackUpBtn from "../Nav/BackUpBtn";

const footerMenuList = [
    {id: 1, title: 'Карта сайта', link: '#'},
    {id: 2, title: 'Новостной блок', link: '/news'},
    {id: 3, title: 'Антикоррупционная политика', link: '#'},
    {id: 4, title: 'Контакты', link: '#'},
    {id: 5, title: 'Каталог', link: '#'},
    {id: 6, title: 'Условия пользования', link: '#'},
];

const firstList = footerMenuList.slice(0, 3);
const secondList = footerMenuList.slice(3, footerMenuList.length);

export default function FooterBlock(){
    return (
        <footer className="flex gap-16 py-4">
            <div className="w-full flex flex-col">
                <FooterBranding />
                <FooterSocials />
            </div>
            <div className="w-full flex flex-col">
                <div className="flex flex-col gap-y-0.5">
                    {firstList.map((element) => {
                        return (
                            <FooterMenu key={element.id} title={element.title} link={element.link} />
                        )
                    })}
                </div>
            </div>
            <div className="w-full flex flex-col">
                <div className="flex flex-col gap-y-0.5">
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