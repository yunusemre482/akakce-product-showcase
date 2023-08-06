import React from 'react'

type Props = {
    followCount: number
}

const FollowCount = ({
    followCount
}: Props) => {
    return (
        <div className="text-center mb-4">
            <p className="text-sm text-gray-700">+ Takip Edenler: <span className="font-medium">{followCount || 'N/A'}</span></p>
        </div>
    )
}

export default FollowCount