'use client';

import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Props {
 htmlCode: string;
}

export const CodeComponent = (props: Props) => {
  const [copied, setCopied] = useState(false);
  const { htmlCode } = props;

  const handleCopyClick = () => {
    navigator.clipboard.writeText(htmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div>
      <div className="text-right mb-2">
        <button
          onClick={handleCopyClick}
          className="p-2 w-[100px] bg-yellow-200"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <SyntaxHighlighter
        language="html"
        style={docco}
        className="overflow-auto max-h-[60vh] !px-5"
      >
        {htmlCode}
      </SyntaxHighlighter>
    </div>
  );
};
