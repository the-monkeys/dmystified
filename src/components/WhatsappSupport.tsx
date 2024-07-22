'use client';

import Icon from './icon';
import { Badge } from './ui/badge';

const WhatsAppButton: React.FC = () => {
  const handleChatClick = () => {
    window.open('https://api.whatsapp.com/send?phone=8806861078', '_blank');
  };

  return (
    <Badge
      variant='outline'
      onClick={handleChatClick}
      className='mx-auto px-4 py-1 sm:mx-0 w-fit text-xs sm:text-sm text-gray-900 border-green-500 bg-green-50 hover:bg-transparent cursor-pointer'
    >
      Confused? Chat with us
      <Icon name='RiWhatsapp' className='ml-1 text-green-600' />
    </Badge>
  );
};

export default WhatsAppButton;
