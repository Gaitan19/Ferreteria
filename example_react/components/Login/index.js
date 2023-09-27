import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import Input from '../Input';
import Button from '../Button';
import { alertMessage } from '../Alert';
import { routes } from '@/constants/routes';
import { CButton } from '@coreui/react';

const Login = (props) => {
  const { customClass, format, imageLogoUrl, imageLogoDescription } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    router.push(routes.menu);

    /*  try {
      e.preventDefault();
      const credentials = {
        email,
        password,
      };

      const { data, status } = await handleLogin(credentials);

      if (status === 200) {
        const { name, token, id } = data;
        alertMessage.success('Login successfully');
        setUser({ name, token, id });
        router.push(routes.todo);
      } else {
        alertMessage.error('Failed to login');
      }
    } catch ({ response: { data: { message } = {} } = {} }) {
      alertMessage.error(message);
    } */
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangepassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
      <div className={customClass}>
        <Image
          width={112}
          height={112}
          src={imageLogoUrl}
          alt={imageLogoDescription}
          priority
        />
        <div className="Format-container">
          <div className="Login-title">
            <h2 className="Format-title">Iniciar Sesion</h2>
          </div>

          <Input
            customClass="Input-container"
            text="Email Address"
            placeholder="Email Address"
            type="email"
            onChange={handleChangeEmail}
          />

          <Input
            customClass="Input-container"
            text="Password"
            placeholder="************"
            type="password"
            onChange={handleChangepassword}
          />

          {/* <Button customClass="Button" buttonText="Login" buttonType="submit" /> */}
          <CButton
            component="input"
            type="submit"
            color="primary"
            value="Iniciar Sesion"
          />
        </div>
      </div>
    </form>

    // <Form
    //   customClass={customClass}
    //   imageUrl="/logo-smbs.png"
    //   imageDescription="logo-smbs"
    //   onSubmit={handleSubmit}
    // >
    //   <FormTitle
    //     customClass="Login-title"
    //     formatText="Format"
    //     title="WELCOME TO THE TODO APP"
    //   />

    //   <Input
    //     customClass="Input-container"
    //     text="Email Address"
    //     placeholder="Email Address"
    //     type="email"
    //     onChange={handleChangeEmail}
    //   />

    //   <Input
    //     customClass="Input-container"
    //     text="Password"
    //     placeholder="************"
    //     type="password"
    //     onChange={handleChangepassword}
    //   />

    //   <Button customClass="Button" buttonText="Login" buttonType="submit" />
    // </Form>
  );
};

Login.propTypes = {
  customClass: PropTypes.string.isRequired,
  format: PropTypes.string,
  imageLogoUrl: PropTypes.string,
  imageLogoDescription: PropTypes.string,
};

Login.defaultProps = {
  format: 'Format',
  imageLogoUrl: '',
  imageLogoDescription: 'logo',
};

export default Login;
