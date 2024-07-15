import * as RemixIcons from '@remixicon/react';

export type IconName =
  | 'RiMenu5'
  | 'RiClose'
  | 'RiWhatsapp'
  | 'RiTwitterX'
  | 'RiArrowRight'
  | 'RiArrowRightS'
  | 'RiArrowDownS'
  | 'RiAdd'
  | 'RiDeleteBin6'
  | 'RiEdit'
  | 'RiLoader5'
  | 'RiMore'
  | 'RiCheck'
  | 'RiWallet3'
  | 'RiLive';

export type IconProps = {
  name: IconName;
  type?: 'Fill' | 'Line';
  size?: number;
  className?: string;
};

const Icon: React.FC<IconProps> = ({
  name,
  type = 'Line',
  size = 20,
  className,
}) => {
  const iconName = `${name}${type}`;

  const DynamicIcon = RemixIcons[iconName as keyof typeof RemixIcons];

  if (!DynamicIcon) {
    console.error(`Icon "${iconName}" does not exist in RemixIcons.`);
    return null;
  }

  return <DynamicIcon className={className} size={size} />;
};

export default Icon;
