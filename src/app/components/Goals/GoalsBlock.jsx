// COMPONENTS
import GoalsHeader from "./GoalsHeader";
import GoalsElement from "./GoalsElement";
// DATA
const goals = [
    {
        id: 1, 
        title: 'Повышение качества продукции', 
        description: 'Постоянное совершенствование технологий производства для обеспечения высокого качества металлургической продукции и соответствия международным стандартам.',
    },
    {
        id: 2, 
        title: 'Устойчивое развитие', 
        description: 'Реализация экологических программ, направленных на снижение воздействия производства на окружающую среду и повышение энергоэффективности.',
    },
    {
        id: 3, 
        title: 'Расширение рынков сбыта', 
        description: 'Укрепление позиций на международных рынках и развитие партнёрских отношений с ведущими компаниями в ключевых отраслях промышленности.',
    },
    {
        id: 4, 
        title: 'Развитие кадрового потенциала', 
        description: 'Создание условий для профессионального роста сотрудников, реализация программ обучения и привлечения молодых специалистов в отрасль.',
    },
]


export default function GoalsBlock(){

    return (
        <div className="flex gap-[2rem] px-4 lg:px-2">
            <div className="w-full grid grid-cols-1 grid-flow-row lg:grid-cols-3 gap-x-[2.5rem] gap-y-[1.5rem]">
                <GoalsHeader />
                {goals.map((goal) => {
                    return (
                        <GoalsElement key={goal.id} id={goal.id} title={goal.title} description={goal.description}/>
                    )
                })}
            </div>
        </div>
    )
}