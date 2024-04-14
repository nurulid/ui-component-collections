import React from 'react';
import { Star, Mail, File, Send } from 'lucide-react';

const folderMenus = [
  {
    icon: Mail,
    title: 'Inbox',
    count: '1293',
    unread: '3',
    active: true,
  },
  {
    icon: Send,
    title: 'Send',
    count: '145',
    unread: '',
    active: false,
  },
  {
    icon: Star,
    title: 'Starred',
    count: '67',
    unread: '',
    active: false,
  },
  {
    icon: File,
    title: 'Draft',
    count: '5',
    unread: '',
    active: false,
  },
];

export const htmlCode = `
<nav className="max-w-[300px] w-full">
  <ul>
    // Active: "bg-gray-100"
    <li className="flex items-center gap-4 py-3 px-4 rounded transition-all active">
      // Active: "text-violet-400"
      <Mail size={33} className="p-2 bg-gray-100 rounded" />
      <h3 className="text-base">Inbox</h3>
      <div className="ml-auto text-xs">
        <span className="text-gray-500">+6</span>
        // Active: "bg-violet-400 text-white"
        <span className="inline-block ml-2 p-2 bg-gray-100 rounded-full">
          132
        </span>
      </div>
    </li>
    <li className="flex items-center gap-4 py-3 px-4 rounded transition-all">
      <Send size={33} className="p-2 bg-gray-100 rounded" />
      <h3 className="text-base">Send</h3>
      <div className="ml-auto text-xs">
        <span className="inline-block ml-2 p-2 bg-gray-100 rounded-full">
          45
        </span>
      </div>
    </li>
    <li className="flex items-center gap-4 py-3 px-4 rounded transition-all">
      <Star size={33} className="p-2 bg-gray-100 rounded" />
      <h3 className="text-base">Starred</h3>
      <div className="ml-auto text-xs">
        <span className="inline-block ml-2 p-2 bg-gray-100 rounded-full">
          45
        </span>
      </div>
    </li>
    <li className="flex items-center gap-4 py-3 px-4 rounded transition-all">
      <File size={33} className="p-2 bg-gray-100 rounded" />
      <h3 className="text-base">Draft</h3>
      <div className="ml-auto text-xs">
        <span className="inline-block ml-2 p-2 bg-gray-100 rounded-full">
          45
        </span>
      </div>
    </li>
  </ul>
</nav>
  `;

export const Navigation = () => {
  return (
    <>
      <nav className="max-w-[300px] w-full">
        <ul>
          {folderMenus.map(({ icon: Icon, title, count, unread, active }) => {
            return (
              // Active: "bg-gray-100" */}
              <li
                key={title}
                className={`mail-folder__menu flex items-center gap-4 py-3 px-4 rounded transition-all ${
                  active ? 'active' : ''
                }`}
              >
                {/* Active: "text-violet-400" */}
                <Icon size={33} className="p-2 bg-gray-100 rounded" />
                <h3 className="text-base">{title}</h3>
                <div className="ml-auto text-xs">
                  {unread ? (
                    <span className="text-gray-500">+{unread}</span>
                  ) : null}
                  {/* Active: "bg-violet-400 text-white" */}
                  <span className="mail-folder__menu-count inline-block ml-2 p-2 bg-gray-100 rounded-full">
                    {count}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
