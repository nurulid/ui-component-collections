'use client';

import { Copy, CopyCheck } from 'lucide-react';
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Props {
  htmlCode: string;
}

export const CodeWrapper = (props: Props) => {
  const [copied, setCopied] = useState(false);
  const { htmlCode } = props;

  const handleCopyClick = () => {
    navigator.clipboard.writeText(htmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div className='group relative'>
      <button
        onClick={handleCopyClick}
        className="p-2 w-[90px] bg-white hover:opacity-80 transition-all rounded absolute right-2 top-2 text-xs opacity-10 group-hover:opacity-100 z-[3]"
      >
        {copied ? (
          <>
            <CopyCheck
              size={14}
              className="inline-block mr-[2px] -translate-y-[1px] text-indie"
            />{' '}
            Copied!
          </>
        ) : (
          <>
            <Copy
              size={14}
              className="inline-block mr-[2px] -translate-y-[1px]"
            />{' '}
            Copy
          </>
        )}
      </button>
      <SyntaxHighlighter
        language="javascript"
        wrapLines
        style={nightOwl}
        className="overflow-auto max-h-[60vh] !py-4 !px-7 max-w-[300px] sm:max-w-[700px] w-full"
      >
        {htmlCode}
      </SyntaxHighlighter>
    </div>
  );
};
