import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import Form from '../Form';
import FormTitle from '../FormTitle';
import Input from '../Input';
import Button from '../Button';
import { alertMessage } from '../Alert';
import routes from '@/constants/routes';

const Login = (props) => {
  const { customClass, format } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
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
    <Form
      customClass={customClass}
      imageUrl="/logo-smbs.png"
      imageDescription="logo-smbs"
      onSubmit={handleSubmit}
    >
      <FormTitle
        customClass="Login-title"
        formatText="Format"
        title="WELCOME TO THE TODO APP"
      />

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

      <Button customClass="Button" buttonText="Login" buttonType="submit" />
    </Form>
  );
};

Login.propTypes = {
  customClass: PropTypes.string.isRequired,
  format: PropTypes.string,
};

Login.defaultProps = {
  format: 'Format',
};

export default Login;
