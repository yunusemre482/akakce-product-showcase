import React, { useState } from 'react'

type Props = {
    storageOptions: string[]
}

const Options = ({
    storageOptions
}: Props) => {
    const [isSelected, setIsSelected] = useState(0)

    const handleSelect = (e: React.MouseEvent<HTMLDivElement>) => {
        const index = Array.from(e.currentTarget.parentElement!.children).indexOf(e.currentTarget)
        setIsSelected(index)
    }



    return (
        <div className='bg-white p-5 '>
            <div className="text-center mb-4">
                <p className="text-sm text-gray-700">Depolama Seçenekleri</p>
            </div>

            <div className="flex justify-center items-center  gap-4">
                {storageOptions.map((option, index) => (
                    <div key={index} className={`${isSelected === index ? " border-neutral-400" : " border-neutral-200"} border-2 text-center rounded-md w-32 h-10 cursor-pointer text-sm text-gray-600 grid items-center`} onClick={handleSelect}>
                        {option}
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Options