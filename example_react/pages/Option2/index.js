import HeadPage from '@/components/HeadPage';
import Layout from '@/components/Layout';
import Carrusel from '@/components/Menu/carrusel';
import Modal from '@/components/Menu/modal';

export default function Option2() {
  return (
    <>
      <HeadPage title="Example react" />
      <Layout>
        <Carrusel />
        <Modal></Modal>
      </Layout>
    </>
  );
}
