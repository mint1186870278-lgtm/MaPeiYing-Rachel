import React from 'react'

const ProjectsTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-purple-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white"

  // 确保name是字符串，如果是数组则只取第一个元素，如果是对象则转换为字符串
  const displayName = Array.isArray(name) 
    ? name[0] 
    : typeof name === 'object' && name !== null
    ? String(name)
    : String(name || '')

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {displayName}
    </button>
  )
}

export default ProjectsTag

