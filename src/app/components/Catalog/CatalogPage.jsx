import EvrazLine from "../Branding/EvrazLine";
import Image from "next/image";
import temp from "../../../../public/sphere/sphere2.jpg"

export default function CatalogPage(){
    return (
        <div className="my-8 px-2">
            <div className="flex justify-center pb-4">
                <h1 className="font-semibold text-2xl">Категории продукции</h1>
            </div>
            <div className="grid grid-cols-3 grid-flow-row gap-8">

                <div className="border-[1px] border-[--border-color] px-4 pt-4 pb-2 relative">
                    <span className="absolute left-0"><EvrazLine /></span>
                    <h1 className="font-medium text-2xl">Строительная продукция</h1>
                    <div className="py-4">
                        <Image src={temp.src} className="rounded-sm" alt={'Image'} width={temp.width} height={temp.height}></Image>
                    </div>                
                </div>

                <div className="border-[1px] border-[--border-color] px-4 pt-4 pb-2 relative">
                    <span className="absolute left-0"><EvrazLine /></span>
                    <h1 className="font-medium text-2xl">Железнодорожная продукция</h1>
                    <div className="py-4">
                        <Image src={temp.src} className="rounded-sm" alt={'Image'} width={temp.width} height={temp.height}></Image>
                    </div>
                </div>

                <div className="border-[1px] border-[--border-color] px-4 pt-4 pb-2 relative">
                    <span className="absolute left-0"><EvrazLine /></span>
                    <h1 className="font-medium text-2xl">Листовой и плоский прокат</h1>
                    <div className="py-4">
                        <Image src={temp.src} className="rounded-sm" alt={'Image'} width={temp.width} height={temp.height}></Image>
                    </div>                
                </div>

                <div className="border-[1px] border-[--border-color] px-4 pt-4 pb-2 relative">
                    <span className="absolute left-0"><EvrazLine /></span>
                    <h1 className="font-medium text-2xl">Трубная продукция</h1>
                    <div className="py-4">
                        <Image src={temp.src} className="rounded-sm" alt={'Image'} width={temp.width} height={temp.height}></Image>
                    </div>                
                </div>

                <div className="border-[1px] border-[--border-color] px-4 pt-4 pb-2 relative">
                    <span className="absolute left-0"><EvrazLine /></span>
                    <h1 className="font-medium text-2xl">Специальные материалы</h1>
                    <div className="py-4">
                        <Image src={temp.src} className="rounded-sm" alt={'Image'} width={temp.width} height={temp.height}></Image>
                    </div>                
                </div>

            </div>
        </div>
    )
}