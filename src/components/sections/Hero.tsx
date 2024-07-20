import Image from 'next/image';

import Section from '../layout/Section';
import { LogoFull } from '../logo';

const Hero = () => {
  return (
    <Section className='mb-10 sm:mb-12'>
      <div className='flex flex-col items-center space-y-2'>
        <div className='self-start sm:self-center h-8 sm:h-10'>
          <Image
            src={LogoFull}
            alt='Dmsytified'
            width={150}
            height={150}
            className='w-full h-full'
          />
        </div>

        <h1 className='w-full py-2 text-3xl sm:text-4xl md:text-5xl text-left sm:text-center'>
          <span className='font-spaceGrotesk font-semibold text-orange'>
            Demystify
          </span>{' '}
          Tech with{' '}
          <span className='font-spaceGrotesk font-semibold text-orange'>
            Expert
          </span>{' '}
          Learning
        </h1>

        <div className='size-48 sm:size-60 md:size-72'>
          <Image
            src='online_learning.svg'
            alt='Learn with Experts'
            width={200}
            height={200}
            className='w-full h-full'
          />
        </div>

        <p className='w-full md:w-4/5 text-sm sm:text-base md:text-lg text-gray-900 text-center'>
          Unlock Affordable Tech Courses and Explore Open Source with Expert
          Guidance.
        </p>
      </div>
    </Section>
  );
};

export default Hero;
