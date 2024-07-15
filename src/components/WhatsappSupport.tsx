'use client';

import { useState } from 'react';

import Icon from './icon';
import { Button } from './ui/button';

const FloatingWhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleChatClick = () => {
    window.open('https://api.whatsapp.com/send?phone=8806861078', '_blank');
  };

  return (
    <div className='fixed bottom-8 right-8 z-10'>
      <Button
        size='icon'
        onClick={handleChatClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className='bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg hover:shadow-none'
      >
        <Icon name='RiWhatsapp' />
      </Button>

      {showTooltip && (
        <div className='absolute w-fit bottom-12 right-4 border-1 border-green-500 bg-white text-black px-4 py-2 rounded-full text-nowrap shadow-lg'>
          <p className='text-sm'>Confused? Chat With Us</p>
        </div>
      )}
    </div>
  );
};

export default FloatingWhatsAppButton;
