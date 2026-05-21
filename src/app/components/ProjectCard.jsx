import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { EyeIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

const ProjectCard = ({ imgUrl, blurImgUrl, title, description, codeLink, previewLink, projectLink, priority = false }) => {
  return (
    <div className="w-full self-start overflow-hidden rounded-xl group">
      {/* 图片部分 */}
      <div className="relative h-52 w-full md:h-72">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          placeholder="empty"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={75}
          priority={priority}
          loading={priority ? undefined : "lazy"}
        />

        {/* hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center gap-4 transition duration-500 opacity-0 group-hover:opacity-100 rounded-t-xl z-20 pointer-events-none group-hover:pointer-events-auto bg-black/45 dark:bg-[rgba(24,24,24,0.7)]"
        >
          {previewLink && (
            <Link
              href={previewLink}
              className="h-14 w-14 border-2 relative rounded-full border-white/80 hover:border-white dark:border-[#ADB7BE] dark:hover:border-white flex items-center justify-center pointer-events-auto z-30"
            >
              <EyeIcon className="h-10 w-10 text-white/90 cursor-pointer hover:text-white dark:text-[#ADB7BE] dark:hover:text-white" />
            </Link>
          )}
          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 w-14 border-2 rounded-full border-white/80 hover:border-white dark:border-[#ADB7BE] dark:hover:border-white flex items-center justify-center pointer-events-auto z-30"
            >
              <ArrowTopRightOnSquareIcon className="h-10 w-10 text-white/90 cursor-pointer hover:text-white dark:text-[#ADB7BE] dark:hover:text-white" />
            </a>
          )}
        </div>
      </div>

      {/* 文字内容 */}
      <div className="rounded-b-xl bg-white px-4 py-6 text-neutral-900 dark:bg-[#181818] dark:text-white">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-neutral-600 dark:text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard

