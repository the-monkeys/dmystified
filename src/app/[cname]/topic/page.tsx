import { notFound } from 'next/navigation';

import Container from '@/components/layout/Container';
import { Separator } from '@/components/ui/separator';
import { getTopicById } from '@/data-access/topic';
import getMdxComponent from '@/utils/getMdxComponent';
import { z } from 'zod';

const idSchema = z.object({
  id: z.string().uuid(),
});

const TopicContentPage = async ({
  searchParams,
}: {
  searchParams: {
    id: string;
  };
}) => {
  const idValidation = idSchema.safeParse(searchParams);
  if (!idValidation.success) {
    notFound();
  }

  const topic = await getTopicById(searchParams.id);

  if (topic?.path === null) {
    notFound();
  }

  const MdxComponent = await getMdxComponent(topic?.path);

  return (
    <Container className='min-h-screen space-y-4'>
      <h1 className='font-spaceGrotesk font-semibold text-2xl sm:text-3xl md:text-4xl text-center'>
        {topic?.title}
      </h1>

      <Separator />

      <MdxComponent />
    </Container>
  );
};

export default TopicContentPage;
