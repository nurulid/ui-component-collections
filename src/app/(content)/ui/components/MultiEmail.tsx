"use client"

import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

const EmailInput: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [emailList, setEmailList] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addEmail();
    }
  };

  const addEmail = () => {
    const trimmedEmail = email.trim();
    if (trimmedEmail && isValidEmail(trimmedEmail) && !emailList.includes(trimmedEmail)) {
      setEmailList([...emailList, trimmedEmail]);
      setEmail('');
    }
  };

  const removeEmail = (index: number) => {
    const newList = emailList.filter((_, i) => i !== index);
    setEmailList(newList);
  };

  const isValidEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div>
      <input
        type="text"
        value={email}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter email addresses"
      />
      <div>
        {emailList.map((email, index) => (
          <div key={index}>
            {email}
            <button onClick={() => removeEmail(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailInput;