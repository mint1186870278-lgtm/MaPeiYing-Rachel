import React from 'react'

const ProjectsTag = ({ name, value, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-purple-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white"

  const displayName = Array.isArray(name)
    ? name[0]
    : typeof name === 'object' && name !== null
    ? String(name)
    : String(name || '')
  const tagValue = value ?? name

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(tagValue)}
    >
      {displayName}
    </button>
  )
}

export default ProjectsTag

