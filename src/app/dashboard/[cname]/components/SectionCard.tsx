import DeleteSectionDialog from './dialogs/DeleteSectionDialog';
import UpdateSectionDialog from './dialogs/UpdateSectionDialog';

const SectionCard = ({
  id,
  title,
  order,
  updatedAt,
}: {
  id: number;
  title: string;
  order: number | null;
  updatedAt: Date;
}) => {
  return (
    <div>
      <div className='flex items-center justify-between gap-2'>
        <h2 className='font-medium text-base sm:text-lg truncate'>
          <span className='block text-xs text-gray-800'>
            Order: {order || 'NA'}
          </span>
          {title}
        </h2>

        <div className='flex items-center'>
          <UpdateSectionDialog id={id} title={title} updatedAt={updatedAt} />

          <DeleteSectionDialog id={id} title={title} />
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
