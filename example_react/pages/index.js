import HeadPage from '@/components/HeadPage';
import Login from '@/components/Login';
import Menu from '@/components/Menu';

export default function Home() {
  return (
    <>
      <HeadPage title="Example react" />
      {/* <Login customClass="Login"></Login> */}
      <Menu />
    </>
  );
}
