import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import handleApiRequest from '@/services';

const FormCategoriaProduct = (props) => {
  const {
    buttonText,
    buttonClass,
    setVisible,
    containerInputs,
    setAlreadyData,
    setData,
  } = props;

  const [categoriaName, setCategoriaName] = useState('');
  const [categoriaDescripcion, setCategoriaDescripcion] = useState('');

  const handleNombreCategoria = (event) => {
    setCategoriaName(event.target.value);
  };

  const handleDescripcionCategoria = (event) => {
    setCategoriaDescripcion(event.target.value);
  };

  const handleGetCategorias = async () => {
    const { data, status } = await handleApiRequest(
      'GET',
      '/Categoria/Get',
      '',
    );
    setData(data);
    setAlreadyData(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const postData = {
      nombreCategoria: categoriaName,
      descripcion: categoriaDescripcion,
    };

    const { data, status } = await handleApiRequest(
      'POST',
      '/Categoria/Post',
      postData,
    );
    handleGetCategorias();

    setVisible(false);
  };

  return (
    <form className="Forms-general" onSubmit={handleSubmit}>
      <div className={containerInputs}>
        <Input
          text="Categoria"
          placeholder="Categoria"
          type="text"
          customClass="Input-container"
          onChange={handleNombreCategoria}
          value={categoriaName}
        />

        <Input
          text="Descripcion"
          placeholder="Descripcion"
          type="text"
          customClass="Input-container"
          onChange={handleDescripcionCategoria}
          value={categoriaDescripcion}
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

FormCategoriaProduct.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
  setVisible: PropTypes.func.isRequired,
  containerInputs: PropTypes.string,
  setAlreadyData: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
};

FormCategoriaProduct.defaultProps = {
  containerInputs: 'Forms-inputs',
};

export default FormCategoriaProduct;
