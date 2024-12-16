import goalsHeader from '../../../../public/goals/goalsHeader.png'

export default function GoalsHeader(props){


    return (
        <div className="row-span-2 relative">
            <div className='absolute right-0 flex top-24 px-4 py-8 bg-[--orange-color]'>
                <h1 className='text-white text-4xl font-bold'>Цели и задачи</h1>
            </div>
            <img src={goalsHeader.src} alt="Goals Header" className='h-full object-cover border-[1px] border-[--border-color]' />
        </div>
    )
}