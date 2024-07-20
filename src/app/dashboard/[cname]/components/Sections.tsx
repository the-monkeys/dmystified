'use client';

import Section from '@/components/layout/Section';
import { Loader } from '@/components/loader';
import useSections from '@/hooks/useSections';

import SectionCard from './SectionCard';

const Sections = ({ cname }: { cname: string }) => {
  const { sections, isLoading } = useSections(cname);

  if (isLoading)
    return (
      <div>
        <Loader className='mx-auto' />
        <p className='text-sm text-center'>Fetching Sections</p>
      </div>
    );

  return (
    <Section className='space-y-4'>
      <p className='text-sm font-gray-800'>
        Total Sections: <span className='font-medium'>{sections?.length}</span>
      </p>

      {sections?.map((section) => (
        <SectionCard
          key={section.id}
          id={section.id}
          title={section.title}
          order={section.order}
          updatedAt={section.updatedAt}
        />
      ))}
    </Section>
  );
};

export default Sections;
