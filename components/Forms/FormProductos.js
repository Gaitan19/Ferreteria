import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import { alertMessage } from '../Alert';
import handleApiRequest from '@/services';

const FormProductos = (props) => {
  const {
    typeFor,
    buttonText,
    buttonClass,
    setVisible,
    containerInputs,
    setData,
    setAlreadyData,
    dataItem,
    disabled,
  } = props;

  const [dataProveedor, setDataProveedor] = useState({});
  const [dataCategoria, setDataCaregoria] = useState({});

  const [idProveedor, setIdProveedor] = useState(dataProveedor.id);
  const [idCategoria, setIdCategoria] = useState(dataCategoria.id);
  const [nombreProducto, setNombreProducto] = useState(
    dataItem.nombreProducto || '',
  );
  const [discontinuo, setDiscontinuo] = useState(dataItem.discontinuo || false);
  const [desripcion, setDescripcion] = useState(dataItem.descripcion || '');
  const [precioUnitario, setPrecioUnitario] = useState(
    dataItem.precioUnitario || 1,
  );
  const [unidadStock, setUnidadStock] = useState(dataItem.unidadStock || 1);
  const [alreadyDataForm, setAlreadyDataForm] = useState(false);

  const fetchDataProveedor = useCallback(async () => {
    try {
      const { data, status } = await handleApiRequest(
        'GET',
        '/Proveedor/Get',
        '',
      );
      setDataProveedor(data);
    } catch (error) {
      alertMessage.error(error);
    }
  }, [setDataProveedor]);

  const fetchDataCategoria = useCallback(async () => {
    try {
      const { data, status } = await handleApiRequest(
        'GET',
        '/Categoria/Get',
        '',
      );
      setDataCaregoria(data);
    } catch (error) {
      alertMessage.error(error);
    }
  }, [setDataCaregoria]);

  useEffect(() => {
    fetchDataProveedor();
    fetchDataCategoria();
  }, [fetchDataProveedor, fetchDataCategoria]);

  useEffect(() => {
    if (
      dataCategoria.length > 0 &&
      dataProveedor.length > 0 &&
      alreadyDataForm === false
    ) {
      setAlreadyDataForm(true);
    }
  }, [dataCategoria, dataProveedor]);

  //   const handleDireccionProveedor = (event) => {
  //     setProveedorDireccion(event.target.value);
  //   };

  //   const handleGetProveedores = async () => {
  //     const { data, status } = await handleApiRequest(
  //       'GET',
  //       '/Proveedor/Get',
  //       '',
  //     );
  //     setData(data);
  //     setAlreadyData(false);
  //   };

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();

  //     if (typeFor === 'editar') {
  //       const postData = {
  //         id: proveedor.id,
  //         nombreProveedor: provedorName,
  //         direccionProveedor: provedorDireccion,
  //         telefonoProveedor: provedorNumero,
  //         estado: true,
  //       };

  //       const { data, status } = await handleApiRequest(
  //         'PUT',
  //         '/Producto/eliminar',
  //         postData,
  //       );
  //     } else {
  //       const postData = {
  //         nombreProveedor: provedorName,
  //         direccionProveedor: provedorDireccion,
  //         telefonoProveedor: provedorNumero,
  //         estado: true,
  //       };

  //       const { data, status } = await handleApiRequest(
  //         'POST',
  //         '/Producto/Post',
  //         postData,
  //       );
  //     }

  //     handleGetProveedores();

  //     setVisible(false);
  //   };

  return (
    <form className="Forms-general" onSubmit={handleSubmit}>
      <div className={containerInputs}>
        {/* <Input
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
        /> */}
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

FormProductos.propTypes = {
  typeFor: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
  setVisible: PropTypes.func.isRequired,
  containerInputs: PropTypes.string,
  setAlreadyData: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
  dataItem: PropTypes.object,
  disabled: PropTypes.bool.isRequired,
};

FormProductos.defaultProps = {
  containerInputs: 'Forms-inputs',
  dataItem: {},
};

export default FormProductos;
