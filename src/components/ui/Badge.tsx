import React from 'react';

export const Badge = (props: { title: string }) => {
  const { title } = props;
  return <span className='px-2 bg-yellow-100/70 text-yellow-500 border border-yellow-500 rounded-full text-[10px] inline-block ml-2'>{title}</span>;
};
