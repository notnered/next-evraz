import EvrazLine from "../Branding/EvrazLine"

const pageText = `ЕВРАЗ-ЗСМК — один из крупнейших металлургических заводов России. 
Предприятие с мировым именем, выпускающее продукцию высочайшего качества для ключевых отраслей промышленности. 
Достижения завода включают внедрение инновационных технологий, устойчивое развитие и признание на международном уровне.`

export default function HeroBlock(){
    
    return (
        <div className="bg-white my-auto h-fit w-full md:max-w-[30rem] flex flex-col">
            {/* <div className="flex flex-col ">
                <div className="w-full bg-[--yellow-color] h-2 rounded-tr-md"></div>
                <div className="w-full bg-[--orange-color] h-2"></div>
                <div className="w-full bg-[--red-color] h-2"></div>
            </div> */}
            <EvrazLine width={'full'} height={2} />
            <div className="flex p-5">
                <p className="font-medium">{pageText}</p>
            </div>
        </div>
    )
}