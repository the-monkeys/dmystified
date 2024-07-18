import { getSectionsAction } from '@/actions/sectionActions';
import useSWR from 'swr';

function useCourses() {
  const { data, isLoading } = useSWR('/get-all-sections', getSectionsAction);

  return {
    sections: data,
    isLoading,
  };
}

export default useCourses;
