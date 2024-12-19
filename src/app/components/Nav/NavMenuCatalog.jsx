// REACT & REACT LIBS
import { FaAngleDown } from 'react-icons/fa';
// COMPONENTS
import NavMenuElement from './NavMenuElement';
import { productionCatalog } from './NavMenuElement';

export default function NavMenuCatalog(props){
    return (
        <>
            <span className='flex' onClick={props.func}><NavMenuElement title='Каталог' link='' dropdown={false}/><FaAngleDown className="mt-2.5 ml-0.5 text-[1.25rem] text-[--orange-color]"/></span>
            <ul style={props.catalogState ? {maxHeight: '15rem'} : {maxHeight: '0'}} className='flex transition-all duration-200 overflow-y-hidden flex-col ml-2.5 text-[1.1875rem] font-semibold capitalize'>
            {productionCatalog.map((element) => {
                return (
                    <li key={element.id}>{element.name}</li>
                )
            })}
            </ul>
        </>
    )
}