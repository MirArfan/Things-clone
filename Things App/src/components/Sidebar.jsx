import React from 'react'
import IconInbox from './icons/IconInbox'
import IconToday from './icons/IconToday'
import IconAnytime from './icons/IconAnytime'
import IconUpcoming from './icons/IconUpcomming'
import IconLogbook from './icons/IconLogbook'
import IconTrash from './icons/IconTrash'
import IconSomeday from './icons/IconSomeday'
import NavLink from './NavLink'
import { useLocation } from 'react-router-dom'

const links = [
  {
    label: "Inbox",
    icon: <IconInbox />,
    href: "/",
    className: "mb-4"
  },
  {
    label: "Today",
    icon: <IconToday />,
    href: "/today"
  },
  {
    label: "Anytime",
    icon: <IconAnytime />,
    href: "/anytime"
  },
  {
    label: "Upcoming",
    icon: <IconUpcoming />,
    href: "/upcoming"
  },
  {
    label: "Someday",
    icon: <IconSomeday />,
    href: "/someday",
    className: "mb-4"
  },
  {
    label: "Logbook",
    icon: <IconLogbook />,
    href: "/logbook"
  },
  {
    label: "Trash",
    icon: <IconTrash />,
    href: "/trash"
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-56 bg-zinc-50 h-screen border-r flex flex-col">
      <ul className="px-5 py-5">
        {links.map((link, i) => (
          <li key={i} className={link.className}>
            <NavLink {...link} isActive={pathname === link.href} />
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <button className="border-t border-gray-300 hover:bg-zinc-300 text-gray-500 font-medium py-2 rounded-sm w-full flex gap-2 items-center px-7">
          <span className="font-medium text-sm">Add Project</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;