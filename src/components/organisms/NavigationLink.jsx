// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const NavigationLink = ({ title, icon, link, children = [], collapsed }) => {
//   const pathname = usePathname();

//   const hasChildren = children.length > 0;
//   const isChildActive = children.some((child) =>
//     pathname.startsWith(child.link)
//   );

//   const isActive =
//     pathname === link ||
//     (link !== "/" &&
//       link !== "/client" &&
//       pathname.startsWith(`${link}/`)) ||
//     isChildActive;

//   const [open, setOpen] = useState(isChildActive);

//   useEffect(() => {
//     if (isChildActive) setOpen(true);
//   }, [pathname]);

//   return (
//     <li>
//       {/* MAIN LINK */}
//       <Link
//         href={link || "#"}
//         onClick={() => hasChildren && setOpen(!open)}
//         className={`flex items-center gap-3 px-5 py-2.5 text-[13px] rounded-sm transition-all duration-300 group
//          ${isActive
//             ? "bg-[#e8f1ff] text-[#1677ff] border-l-4 border-[#1677ff]"
//             : "text-[#262626] hover:bg-[#f3f4f6]"
//           }`}
//       >
//         <div className="flex items-center gap-3 min-w-0">
//           {/* ICON */}
//           <i
//             className={`${icon} text-lg transition-transform duration-300 group-hover:scale-110`}
//           ></i>

//           {/* TEXT */}
//           {!collapsed && (
//             <span className="text-sm truncate ">
//               {title}
//             </span>
//           )}
//         </div>

//         {/* ARROW */}
//         {!collapsed && hasChildren && (
//           <i
//             className={`ri-arrow-down-s-line transition-all duration-300 ${open ? "rotate-180" : "rotate-0"
//               }`}
//           ></i>
//         )}
//       </Link>

//       {/* CHILDREN */}
//       <div
//         className={` transition-all duration-300 ${open ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
//           }`}
//       >
//         <ul className="ml-6 md:ml-8 space-y-2 text-sm">
//           {children.map((child, index) => (
//             <li key={index}>
//               <Link
//                 href={child.link}
//                 className={`flex items-center gap-3 px-3 py-2 text-sm rounded-xl transition-all group text-blue-100/80 hover:bg-white/10 hover:text-white
//                 ${pathname === child.link
//                     ? "bg-white/20 text-white shadow-sm"
//                     : "text-white/70 hover:text-white hover:bg-white/10 hover:translate-x-1"
//                   }`}
//               >
//                 {child.title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>


//     </li>
//   );
// };

// export default NavigationLink;



"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationLink = ({
  title,
  icon,
  link = "#",
  children = [],
  collapsed = false,
  level = 0,
}) => {
  const pathname = usePathname();

  const hasChildren = children.length > 0;

  const checkActive = (menus) => {
  return menus.some((menu) => {
    if (menu.link && pathname === menu.link) {
      return true;
    }

    if (menu.children?.length) {
      return checkActive(menu.children);
    }

    return false;
  });
};

const isChildActive = checkActive(children);

  const isActive =
  (link !== "#" &&
    (pathname === link || pathname.startsWith(link + "/"))) ||
  isChildActive;

  const [open, setOpen] = useState(isChildActive);

  useEffect(() => {
    if (isChildActive) {
      setOpen(true);
    }
  }, [pathname]);

  const handleClick = (e) => {
    if (hasChildren) {
      e.preventDefault();
      setOpen((prev) => !prev);
    }
  };

  return (
    <li>
      <Link
        href={link}
        onClick={handleClick}
        className={`flex items-center justify-between px-4 py-2 rounded-lg transition-all
        ${
          isActive
            ? "bg-blue-50 text-blue-600"
            : "hover:bg-gray-100 text-gray-700"
        }`}
        style={{
          paddingLeft: `${16 + level * 18}px`,
        }}
      >
        <div className="flex items-center gap-3">
          {icon && <i className={`${icon} text-lg`} />}
          {!collapsed && <span>{title}</span>}
        </div>

        {!collapsed && hasChildren && (
          <i
            className={`ri-arrow-right-s-line transition-transform duration-300 ${
              open ? "rotate-90" : ""
            }`}
          />
        )}
      </Link>

      {hasChildren && (
        <div
          className={`overflow-hidden transition-all duration-300 ${
            open ? "max-h-[600px]" : "max-h-0"
          }`}
        >
          <ul className="mt-1">
            {children.map((child, index) => (
              <NavigationLink
                key={index}
                {...child}
                collapsed={collapsed}
                level={level + 1}
              />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default NavigationLink;