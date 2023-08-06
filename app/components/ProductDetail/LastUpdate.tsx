import React from 'react'

type Props = {
    lastUpdate: string
}

const LastUpdate = ({ lastUpdate }: Props) => {
    return (
        <div className="text-center bg-white p-4 font-medium">
            <p className="text-sm text-gray-400">Son Güncelleme: <span className="font-medium">{lastUpdate}</span></p>
        </div>
    )
}

export default LastUpdate