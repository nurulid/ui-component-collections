import React from 'react';
import {
  Settings,
  MessageCircleMore,
  AreaChart,
  Calendar,
  Mail,
  FileText,
  LogOut,
  BadgeHelp,
} from 'lucide-react';

export const htmlSidebar = `<section className="mail-sidebar bg-black w-[102px] h-screen m-0 p-4 flex flex-col justify-between">
      <div className="flex flex-col gap-10 items-center">
        <img src="/icons/mail-logo.svg" width={44} />
        <nav className="space-y-5">
          <ul className="space-y-2 pb-3 border-b-2 border-gray-600">
            <li>
              <a href="#" className="active">
                <MessageCircleMore />
              </a>
            </li>
            <li>
              <a href="#">
                <AreaChart />
              </a>
            </li>
            <li>
              <a href="#">
                <Calendar />
              </a>
            </li>
            <li>
              <a href="#">
                <Mail />
              </a>
            </li>
            <li>
              <a href="#">
                <FileText />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <Settings />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col items-center">
        <nav className="nav-bottom">
          <ul>
            <li>
              <a href="#">
                <BadgeHelp />
              </a>
            </li>
            <li>
              <a href="#" className="logout">
                <LogOut />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
`;

export const Sidebar = () => {
  return (
    <section className="mail-sidebar bg-black w-[102px] h-[70vh] m-0 p-4 flex flex-col justify-between text-white">
      <div className="flex flex-col gap-10 items-center">
        <img src="/icons/mail-logo.svg" width={44} />
        <nav className="space-y-5">
          <ul className="space-y-2 pb-3 border-b-2 border-gray-600">
            <li>
              <a href="#" className="active">
                <MessageCircleMore />
              </a>
            </li>
            <li>
              <a href="#">
                <AreaChart />
              </a>
            </li>
            <li>
              <a href="#">
                <Calendar />
              </a>
            </li>
            <li>
              <a href="#">
                <Mail />
              </a>
            </li>
            <li>
              <a href="#">
                <FileText />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <Settings />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col items-center">
        <nav className="nav-bottom">
          <ul>
            <li>
              <a href="#">
                <BadgeHelp />
              </a>
            </li>
            <li>
              <a href="#" className="logout">
                <LogOut />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
