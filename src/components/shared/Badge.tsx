import React from 'react';

export const Badge = (props: { title: string }) => {
  const { title } = props;
  return <span className='px-2 py-[1px] bg-neutral-100/70 text-neutral-500 border border-neutral-500 rounded-full text-[12px] ml-2'>{title}</span>;
};
