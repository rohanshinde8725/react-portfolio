import React from 'react'

const SkillBar = ( {name, percent} ) => {
  return (
    <div className='mb-6'>
        {/* Top Bar */}
        <div className="flex justify-between mb-1 text-white">
            <span className="font-medium">{name}</span>
            <span>{percent}</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-gray-300 rounded">
            <div className="h-1.5 bg-[#ed143d] rounded"
                style={{ width: `${percent}%` }}>
            </div>
        </div>
    </div>
  )
}

export default SkillBar