import React, { useState } from 'react';
import { Anchor } from '@mantine/core';

const EmailContact: React.FC = () => {
  const handleCopyClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const emailInput = document.getElementById('emailInput');
    const email = emailInput?.textContent?.trim();

    if (email) {
      navigator.clipboard.writeText(email);
      localStorage.setItem('copiedEmail', email);
      alert('Email address copied!');
    }
  };

  return (
    <div id="emailInput">
      <Anchor href="#" onClick={handleCopyClick}>
        eitan@eitans.website
      </Anchor>
    </div>
  );
};

export default EmailContact;
