import Image from 'next/image';

const FeatureCard = ({
  title,
  description,
  imageName,
}: {
  title: string;
  description: string;
  imageName: string;
}) => {
  return (
    <div className='relative col-span-2 sm:col-span-1 p-6 flex flex-col items-center space-y-2 rounded-3xl shadow-lg shadow-gray-100 overflow-hidden'>
      <div className='absolute top-0 sm:-top-12 right-0 sm:-right-12 w-fit h-full'>
        <Image
          src={`./${imageName}.svg`}
          alt='Dmystified'
          width={150}
          height={150}
          className='w-full h-full opacity-20 sm:opacity-10'
        />
      </div>

      <Image
        src={`./${imageName}.svg`}
        alt='Dmystified'
        width={150}
        height={150}
        className='hidden sm:block sm:size-20 z-10'
      />

      <h2 className='font-spaceGrotesk font-semibold text-2xl text-center z-10'>
        {title}
      </h2>

      <p className='text-sm sm:text-base text-center text-gray-800 z-10'>
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
