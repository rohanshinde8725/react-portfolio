import React from 'react'

const SkillBar = ({ name, percent }) => {
  return (
    <div className='mb-6'>
      
      {/* Top */}
      <div className="flex justify-between mb-1 text-sm sm:text-base">
        <span className="font-medium">{name}</span>
        <span>{percent}%</span>
      </div>

      {/* Bar */}
      <div className="w-full h-2 bg-gray-700 rounded">
        <div
          className="h-2 bg-[#ed143d] rounded transition-all duration-500"
          style={{ width: `${percent}%` }}
        ></div>
      </div>

    </div>
  )
}

export default SkillBar