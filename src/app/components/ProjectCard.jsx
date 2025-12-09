import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid'

const ProjectCard = ({ imgUrl, blurImgUrl, title, description, codeLink, previewLink, priority = false }) => {
  return (
    <div className="rounded-xl overflow-hidden group">
      {/* 图片部分 */}
      <div className="relative h-52 md:h-72 w-full rounded-t-xl overflow-hidden">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          placeholder="empty"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={85}
          priority={priority}
        />

        {/* hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center gap-4 transition duration-500 opacity-0 group-hover:opacity-100 rounded-t-xl z-20 pointer-events-none group-hover:pointer-events-auto"
          style={{ backgroundColor: 'rgba(24,24,24,0.7)' }}
        >
          {codeLink && (
            <Link
              href={codeLink}
              target="_blank"
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center pointer-events-auto z-30"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer hover:text-white" />
            </Link>
          )}
          {previewLink && (
            <Link
              href={previewLink}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center pointer-events-auto z-30"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer hover:text-white" />
            </Link>
          )}
        </div>
      </div>

      {/* 文字内容 */}
      <div className="text-white bg-[#181818] py-6 px-4 rounded-b-xl">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard

