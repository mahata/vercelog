import type { GetServerSideProps } from 'next';

export default function Dummy() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/pages/1',
      permanent: false,
    },
  };
};
