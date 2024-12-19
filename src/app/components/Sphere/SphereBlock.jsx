'use client';
// COMPONENTS
import sphere1 from '../../../../public/sphere/sphere1.jpg';
import sphere2 from '../../../../public/sphere/sphere2.jpg';
import sphere3 from '../../../../public/sphere/sphere3.jpg';
import SphereHeader from './SphereHeader';
import SphereContent from './SphereContent';
// REACT & REACT LIBS
import { useEffect, useState } from 'react';

const sphereObj = [
    {
        id: 1,
        title: 'Производство металлургической продукции мирового уровня', 
        description: `ЕВРАЗ-ЗСМК — ведущий производитель металлопроката, включая рельсы, арматуру, балки и листовой прокат. 
        Продукция завода востребована в строительстве, транспортной инфраструктуре и машиностроении. 
        Современные технологии позволяют достигать высокого качества и соответствовать международным стандартам. 
        Завод участвует в ключевых проектах, таких как строительство мостов, железных дорог и промышленных объектов, подтверждая статус надёжного партнёра.`,
        color: '#FBB92F',
        picture: sphere1,
    },
    {
        id: 2, 
        title: 'Вклад в развитие инфраструктуры и экономики', 
        description: `ЕВРАЗ-ЗСМК играет важную роль в создании и модернизации инфраструктуры. 
        Завод поставляет материалы для железных дорог, трубопроводов и энергетических объектов. 
        Его продукция используется в масштабных проектах, способствуя развитию экономики и укрепляя позиции на международных рынках.`,
        color: '#EE7918',
        picture: sphere2,
    },
    {
        id: 3, 
        title: 'Экологическая ответственность и устойчивое развитие', 
        description: `Завод уделяет большое внимание экологической ответственности, снижая выбросы, перерабатывая отходы и внедряя энергоэффективные технологии. 
        Также ЕВРАЗ-ЗСМК активно поддерживает социальные инициативы, включая образовательные программы, развитие местного сообщества и создание новых рабочих мест.`,
        color: '#E42213',
        picture: sphere3,
    },
]


export default function SphereBlock(){
    return (
        <div className="py-8">
            <div className='px-4 lg:px-2'>
                {sphereObj.map((element) => {
                    return (
                    element.id % 2 !== 0 ? (
                        <div key={element.id} className='grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-x-[2.5rem] mb-8'>
                            <SphereHeader key={`header-${element.id}`} title={element.title} imageSrc={element.picture} color={element.color} />
                            <SphereContent key={`content-${element.id}`} description={element.description}/>
                        </div>
                    ) : (
                        <div key={element.id} className='grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-x-[2.5rem] mb-8'>
                            <SphereContent key={`content-${element.id}`} description={element.description} inversed={false}/>
                            <SphereHeader key={`header-${element.id}`} title={element.title} imageSrc={element.picture} color={element.color} />
                        </div>
                    )
                )})}
            </div>
        </div>
    )
}