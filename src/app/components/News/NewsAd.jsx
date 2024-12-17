import careerPicture from "../../../../public/ad/ad.png";
import MainButton from "../Buttons/MainButton";

// TODO: ПЕРЕДЕЛАТЬ КАРЬЕРНЫЙ БЛОК С НУЛЯ

export default function NewsAd(){
    return (
        <div>
            <div className=" relative">
                <div className="bg-white border-[1px] border-[--border-color] px-4 py-2">
                    
                    <div>
                        {/* <img className="w-full rounded-sm" src={careerPicture.src} alt="Карьера в ЕВРАЗ" /> */}
                        <h1 className="text-3xl font-semibold text-center py-2">Карьера в ЕВРАЗ</h1>
                    </div>

                    <div className="pb-2">
                        {/* <p className="text-3xl text-center font-semibold text-white">Присоединяйся к нам</p> */}
                        <MainButton text={'Присоединяйся к нам'} full={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}