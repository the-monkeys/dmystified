import Image from 'next/image';

const FeatureCard = ({
  title,
  imageName,
  description,
}: {
  title: string;
  imageName: string;
  description: string;
}) => {
  return (
    <div className='relative col-span-2 sm:col-span-1 p-4 sm:p-6 flex flex-col items-center justify-center rounded-3xl shadow-md overflow-hidden'>
      <div className='absolute -top-4 -right-4 w-fit h-full'>
        <Image
          src={`./${imageName}.svg`}
          alt='Dmystified'
          width={150}
          height={150}
          className='w-full h-full opacity-10'
        />
      </div>

      <Image
        src={`./${imageName}.svg`}
        alt='Dmystified'
        width={150}
        height={150}
        className='size-28 z-10'
      />

      <h2 className='font-semibold text-lg sm:text-xl text-center'>{title}</h2>

      <p className='pt-2 text-sm sm:text-base text-gray-900 text-center'>
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
