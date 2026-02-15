"use client";

import Link from "next/link";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

const NavLink = ({ href, title }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    // 如果是锚点链接
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      
      // 如果当前不在目标页面，先导航到目标页面
      if (pathname !== path && path !== '/') {
        router.push(href);
        return;
      }
      
      // 如果在同一页面，阻止默认行为，手动滚动
      e.preventDefault();
      const targetId = hash;
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
                // For 'about' and 'contact' sections, center them. For others (like 'projects'), align to top.
        const blockPosition = (targetId === 'about' || targetId === 'contact') ? 'center' : 'start';
        targetElement.scrollIntoView({ behavior: 'smooth', block: blockPosition });
        // 更新URL但不触发滚动
        window.history.pushState(null, '', href);
      } else if (pathname !== path) {
        // 如果元素不存在且不在目标页面，导航到目标页面
        router.push(href);
      }
    }
  };

  return (
    <Link 
      href={href} 
      onClick={handleClick}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
