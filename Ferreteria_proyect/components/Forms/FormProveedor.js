import PropTypes from 'prop-types';
import Button from '../Button';
import Input from '../Input';
import { useState } from 'react';
import { alertMessage } from '../Alert';
import handleApiRequest from '@/services';

const FormProveedor = (props) => {
  const {
    typeFor,
    buttonText,
    buttonClass,
    setVisible,
    containerInputs,
    setDataProveedores,
    setAlreadyData,
  } = props;

  const [provedorName, setProveedorName] = useState('');
  const [provedorDireccion, setProveedorDireccion] = useState('');
  const [provedorNumero, setProveedorNumero] = useState('');

  const handleNombreProveedor = (event) => {
    setProveedorName(event.target.value);
  };

  const handleNumeroProveedor = (event) => {
    setProveedorNumero(event.target.value);
  };

  const handleDireccionProveedor = (event) => {
    setProveedorDireccion(event.target.value);
  };

  const handleGetProveedores = async () => {
    const { data, status } = await handleApiRequest(
      'GET',
      '/Proveedor/Get',
      '',
    );
    setDataProveedores(data);
    setAlreadyData(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      nombreProveedor: provedorName,
      direccion: provedorDireccion,
      telefonoProveedor: provedorNumero,
      estado: true,
    };

    const { data, status } = await handleApiRequest(
      'POST',
      '/Proveedor/Post',
      postData,
    );

    handleGetProveedores();

    setVisible(false);
  };

  return (
    <form className="Forms-general" onSubmit={handleSubmit}>
      <div className={containerInputs}>
        <Input
          text="Nombre Proveedor"
          placeholder="Nombre"
          type="text"
          customClass="Input-container"
          onChange={handleNombreProveedor}
        />

        <Input
          text="Telefono"
          placeholder="Telefono"
          type="text"
          customClass="Input-container"
          onChange={handleNumeroProveedor}
        />

        <Input
          text="Direccion"
          placeholder="Direccion"
          type="text"
          customClass="Input-container"
          onChange={handleDireccionProveedor}
          divClass="Input-direccion"
        />
      </div>
      <Button
        buttonType="submit"
        buttonText={buttonText}
        customClass={buttonClass}
      ></Button>
    </form>
  );
};

FormProveedor.propTypes = {
  typeFor: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
  setVisible: PropTypes.func.isRequired,
  containerInputs: PropTypes.string,
  setAlreadyData: PropTypes.func.isRequired,
  setDataProveedores: PropTypes.func.isRequired,
};

FormProveedor.defaultProps = {
  containerInputs: 'Forms-inputs',
};

export default FormProveedor;
