// REACT & REACT LIBS
import { FaRegFilePdf, FaHandshakeSimple, FaSuitcase, FaPeopleGroup,  } from "react-icons/fa6";
import { TbBinaryTree } from "react-icons/tb";
// COMPONENTS
import List from "../../ListStyles/List";
import EvrazLine from "../../Branding/EvrazLine";


export default function PartnersContact(){

    return (
        <div className="w-full">
            <div className="py-4 flex flex-col">
                <span className="absolute left-0"><EvrazLine /></span>
                <h1 className="text-3xl font-semibold">
                    Политика в области закупок
                </h1>
                <div className="flex flex-col gap-y-1 py-4">
                    <span className="flex items-center gap-2 text-[1.375rem]">
                        <FaRegFilePdf className="text-2xl min-w-max" />
                        <a 
                            href="https://www.evraz.com/files/ru/evraz-supplier-code-of-conduct-ru.pdf" 
                            target="_blank" 
                            className="underline underline-offset-4 hover:no-underline">
                            Кодекс поведения поставщиков EVRAZ plc
                        </a>
                    </span>
                    <span className="flex items-center gap-2 text-[1.375rem]">
                        <FaRegFilePdf className="text-2xl min-w-max"/>
                        <a 
                            href="https://www.evraz.com/files/ru/suppliers/policy/supply_policy.pdf" 
                            target="_blank" 
                            className="underline underline-offset-4 hover:no-underline">
                            Политика об основных принципах деятельности в области снабжения ООО «ЕВРАЗ»
                        </a>
                    </span>
                </div>
            </div>
            <div className="py-4">
                <h1 className="text-3xl font-semibold">
                    Принципы Евраза в области снабжения
                </h1>
                <div className="grid grid-cols-1 grid-flow-row gap-4 lg:grid-cols-2 lg:grid-rows-2 lg:gap-8 py-4">

                    <div>
                        <div>
                            <div className="text-5xl py-4"><FaHandshakeSimple /></div>
                            <h2 className="text-2xl font-semibold">Принцип честности и партнерских отношений</h2>
                        </div>
                        <div>
                            <ul className="before:text-orange-500 list-inside flex flex-col gap-y-2">
                                <List text={'Мы действуем открыто и прозрачно, укрепляя доверие и завоевывая уважение поставщиков'} />
                                <List text={'Мы стремимся к установлению отношений путем организации совместных разработок и поддержки внедрения прогрессивных технологий'} />
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div className="text-5xl py-4"><FaSuitcase /></div>
                            <h2 className="text-2xl font-semibold">Принцип экономичности и экологичности</h2>
                        </div>
                        <div>
                            <ul className="before:text-orange-500 list-inside flex flex-col gap-y-2">
                                <List text={'Группа приняла на себя обязательства по осуществлению закупочных процедур наиболее эффективными способами, с минимально возможными затратами и без потери качества'} />
                                <List text={'Мы перешли на электронный документооборот (ЭДО) с применением усиленной квалифицированной электронной подписи и имеем возможность принимать от поставщиков в электронном виде юридически значимые документы'} />
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div className="text-5xl py-4"><FaPeopleGroup /></div>
                            <h2 className="text-2xl font-semibold">Принцип открытости и равноправия</h2>
                        </div>
                        <div>
                            <ul className="before:text-orange-500 list-inside flex flex-col gap-y-2">
                                <List text={'Любая российская и зарубежная компания может стать нашим поставщиком на условиях свободной конкуренции и при условии соблюдения всех наших требований с точки зрения безопасности, надежности и следования нормам действующего законодательства.'} />
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div className="text-5xl py-4"><TbBinaryTree /></div>
                            <h2 className="text-2xl font-semibold">Принцип минимизации запасов ТМЦ</h2>
                        </div>
                        <div>
                            <ul className="before:text-orange-500 list-inside flex flex-col gap-y-2">
                                <List text={'За счет оптимальной организации производственных и снабженческих процессов мы стремимся к минимизации запасов ТМЦ. При этом абсолютным приоритетом для нас является безопасность и непрерывность технологического процесса'} />
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}