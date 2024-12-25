'use client';
// REACT & REACT LIBS
import { useRouter } from "next/navigation";
// COMPONENTs
import EvrazLine from "../Branding/EvrazLine";
import Image from "next/image";
import temp from "../../../../public/sphere/sphere2.jpg";
// DATA

export default function CatalogPage(props){
    const router = useRouter();
    const categoriesArray = props.catalogData;

    return (
        <div className="my-8 px-2">
            <div className="flex justify-center pb-4">
                <h1 className="font-semibold text-2xl">Категории продукции</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 grid-flow-row gap-4 lg:gap-y-8 lg:gap-x-8">

            {categoriesArray.map((item) => {
                return (
                    <div onClick={() => router.push(`/catalog/${item.id}`)} key={item.id} className="border-[1px] group border-[--border-color] px-4 pt-4 pb-2 relative cursor-pointer">
                        <span className="absolute left-0"><EvrazLine /></span>
                        <h1 className="font-medium text-2xl">{item.title}</h1>
                        <div className="py-4">
                            <Image src={temp.src} className="rounded-sm w-full transition-opacity duration-200 group-hover:opacity-90" alt={'Image'} width={temp.width} height={temp.height}></Image>
                        </div>                
                    </div>
                )
            })}

            </div>
        </div>
    )
}