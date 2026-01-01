import { Calendar, Circle, Menu, Paperclip } from 'lucide-react';
import React from 'react';

export const htmlTaskCard = `<div className="w-[450px] p-[13px] rounded-[30px] border-2 border-gray-200 border-dashed">
  <div className="bg-[#232526] rounded-[28px] text-white border border-gray-600 shadow-md">
    <div className="flex items-center justify-between p-7 border-b border-gray-600">
      <span className="py-1 px-2 border border-gray-500 rounded-full text-xs">
        <Circle className="size-[6px] inline-block mr-1" /> To-Do
      </span>
      <ul className="flex [&>li:not(:last-child)]:-mr-[6px] [&>li:nth-child(odd)]:z-10">
        <li className="size-7 rounded-full border border-black">
          <img
            src="/images/me-ai.png"
            alt="user-1"
            className="block size-full object-cover rounded-full"
          />
        </li>
        <li className="size-7 rounded-full border border-black">
          <img
            src="/images/brooke-cagle-pPtLSKseW78-unsplash.jpg"
            alt="user-2"
            className="block size-full object-cover rounded-full"
          />
        </li>
      </ul>
    </div>
    <div className="space-y-7 p-7">
      <h3 className="text-xl">Landing Page UI Design</h3>
      <div className="flex items-center justify-between">
        <span className="py-1 px-2 border border-black shadow-md rounded-full text-xs bg-[#B8EE6B] text-black">
          <Calendar className="size-3 inline-block mr-1" /> Aug 8
        </span>
        <div className="flex gap-2">
          <button className="p-[6px] border border-gray-600 rounded-lg flex items-center justify-center gap-1">
            <Paperclip className="size-4 inline-block" /> 2
          </button>
          <button className="p-[6px] border border-gray-600 rounded-lg">
            <Menu className="size-5 inline-block" />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`;

export const TaskCard = () => {
  return (
    <div className='flex justify-center'>
      <div className="w-[450px] p-[13px] rounded-[30px] border-2 border-gray-200 border-dashed">
        <div className="bg-[#232526] rounded-[28px] text-white border border-gray-600 shadow-md">
          <div className="flex items-center justify-between p-7 border-b border-gray-600">
            <span className="py-1 px-2 border border-gray-500 rounded-full text-xs">
              <Circle className="size-[6px] inline-block mr-1" /> To-Do
            </span>
            <ul className="flex [&>li:not(:last-child)]:-mr-[6px] [&>li:nth-child(odd)]:z-10">
              <li className="size-7 rounded-full border border-black">
                <img
                  src="/images/me-ai.png"
                  alt="user-1"
                  className="block size-full object-cover rounded-full"
                />
              </li>
              <li className="size-7 rounded-full border border-black">
                <img
                  src="/images/brooke-cagle-pPtLSKseW78-unsplash.jpg"
                  alt="user-2"
                  className="block size-full object-cover rounded-full"
                />
              </li>
            </ul>
          </div>
          <div className="space-y-7 p-7">
            <h3 className="text-xl">Landing Page UI Design</h3>
            <div className="flex items-center justify-between">
              <span className="py-1 px-2 border border-black shadow-md rounded-full text-xs bg-[#B8EE6B] text-black">
                <Calendar className="size-3 inline-block mr-1" /> Aug 8
              </span>
              <div className="flex gap-2">
                <button className="p-[6px] border border-gray-600 rounded-lg flex items-center justify-center gap-1">
                  <Paperclip className="size-4 inline-block" /> 2
                </button>
                <button className="p-[6px] border border-gray-600 rounded-lg">
                  <Menu className="size-5 inline-block" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
