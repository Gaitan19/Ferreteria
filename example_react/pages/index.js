import HeadPage from '@/components/HeadPage';
import Layout from '@/components/Layout';
import Login from '@/components/Login';

export default function Home() {
  return (
    <>
      <HeadPage title="Example react" />
      <Login customClass="Login" imageLogoUrl="/icono_herramientas.png" />
    </>
  );
}
