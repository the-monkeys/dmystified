import Container from '@/components/layout/Container';

const DashboardCoursePage = ({
  params,
  searchParams,
}: {
  params: {
    cname: string;
  };
  searchParams: {
    id: string;
  };
}) => {
  return (
    <Container>
      <h1>{params.cname}</h1>
      <p>{searchParams.id}</p>
    </Container>
  );
};

export default DashboardCoursePage;
