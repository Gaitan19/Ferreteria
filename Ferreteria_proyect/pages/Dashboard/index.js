import HeadPage from '@/components/HeadPage';
import Layout from '@/components/Layout';
import Chart from '@/components/Menu/chart';

export default function MenuPrincipal() {
  return (
    <>
      <HeadPage />
      <Layout>
        <Chart></Chart>
      </Layout>
    </>
  );
}
