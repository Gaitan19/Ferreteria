import PropTypes from 'prop-types';
import Button from '../Button';
import Input from '../Input';
import { useEffect, useState } from 'react';
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
    proveedor,
    disabled,
  } = props;

  const [provedorName, setProveedorName] = useState(
    proveedor.nombreProveedor || '',
  );
  const [provedorDireccion, setProveedorDireccion] = useState(
    proveedor.direccionProveedor || '',
  );
  const [provedorNumero, setProveedorNumero] = useState(
    proveedor.telefonoProveedor || '',
  );

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

    if (typeFor === 'editar') {
      const postData = {
        id: proveedor.id,
        nombreProveedor: provedorName,
        direccionProveedor: provedorDireccion,
        telefonoProveedor: provedorNumero,
        estado: true,
      };

      const { data, status } = await handleApiRequest(
        'PUT',
        '/Proveedor/actualizar',
        postData,
      );
    } else {
      const postData = {
        nombreProveedor: provedorName,
        direccionProveedor: provedorDireccion,
        telefonoProveedor: provedorNumero,
        estado: true,
      };

      const { data, status } = await handleApiRequest(
        'POST',
        '/Proveedor/Post',
        postData,
      );
    }

    handleGetProveedores();

    setVisible(false);
  };

  return (
    <form className="Forms-general" onSubmit={handleSubmit}>
      <div className={containerInputs}>
        <Input
          disabled={disabled}
          text="Nombre Proveedor"
          placeholder="Nombre"
          type="text"
          customClass="Input-container"
          onChange={handleNombreProveedor}
          value={provedorName}
        />

        <Input
          disabled={disabled}
          text="Telefono"
          placeholder="Telefono"
          type="text"
          customClass="Input-container"
          onChange={handleNumeroProveedor}
          value={provedorNumero}
        />

        <Input
          disabled={disabled}
          text="Direccion"
          placeholder="Direccion"
          type="text"
          customClass="Input-container"
          onChange={handleDireccionProveedor}
          divClass="Input-direccion"
          value={provedorDireccion}
        />
      </div>
      {!disabled && (
        <Button
          buttonType="submit"
          buttonText={buttonText}
          customClass={buttonClass}
        ></Button>
      )}
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
  proveedor: PropTypes.object,
  disabled: PropTypes.bool.isRequired,
};

FormProveedor.defaultProps = {
  containerInputs: 'Forms-inputs',
  proveedor: {},
};

export default FormProveedor;
