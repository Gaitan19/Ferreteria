import HeadPage from '@/components/HeadPage';
import ExampleComponent from '@/components/ExampleComponent';
import Eventos from '@/components/Counter';
import Login from '@/components/Login';

export default function Home() {
  return (
    <>
      <HeadPage title="Example react" />
      <Login customClass="Login"></Login>
    </>
  );
}
