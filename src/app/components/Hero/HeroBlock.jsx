// COMPONENTS
import EvrazLine from "../Branding/EvrazLine"
// DATA
const pageText = `ЕВРАЗ-ЗСМК — один из крупнейших металлургических заводов России. 
Предприятие с мировым именем, выпускающее продукцию высочайшего качества для ключевых отраслей промышленности. 
Достижения завода включают внедрение инновационных технологий, устойчивое развитие и признание на международном уровне.`

export default function HeroBlock(props){
    
    return (
        <div className="bg-white my-auto h-full w-full md:max-w-[30rem] rounded-sm flex flex-col">
            <div className="flex flex-col ">
                <div className="w-full bg-[--yellow-color] h-2 rounded-tr-sm"></div>
                <div className="w-full bg-[--orange-color] h-2"></div>
                <div className="w-full bg-[--red-color] h-2"></div>
            </div>
            <div className="flex py-4 px-4">
                <p className="font-medium">{pageText}</p>
            </div>
            <div className="flex h-full items-end py-4 justify-end px-4 font-medium">
                {props.slideCount + 1}/3
            </div>
        </div>
    )
}