/* eslint-disable default-case */
import {
  CButton,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from '@coreui/react';
import PropTypes from 'prop-types';
import Button from '../Button';
import FormProveedor from './FormProveedor';
import FormCategoriaProduct from './FormCategoriaProduct';

const Forms = (props) => {
  const {
    type,
    typeFor,
    title,
    children,
    buttonClass,
    buttonText,
    customClass,
    visible,
    setVisible,
    setData,
    setAlreadyData,
    item,
    disabled,
  } = props;

  const handleForms = () => {
    switch (type) {
      case 'proveedor':
        return (
          <FormProveedor
            buttonClass={buttonClass}
            setVisible={setVisible}
            buttonText={buttonText}
            typeFor={typeFor}
            setData={setData}
            setAlreadyData={setAlreadyData}
            proveedor={item}
            disabled={disabled}
          ></FormProveedor>
        );

      case 'categoriaProducts':
        return (
          <FormCategoriaProduct
            buttonClass={buttonClass}
            setVisible={setVisible}
            buttonText={buttonText}
            setAlreadyData={setAlreadyData}
            setData={setData}
          />
        );
    }
  };

  //   const [visible, setVisible] = useState(true);
  return (
    <>
      <CModal
        className={customClass}
        visible={visible}
        onClose={() => setVisible(false)}
        size="lg"
        backdrop="static"
        alignment="center"
      >
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle id="LiveDemoExampleLabel">{title}</CModalTitle>
        </CModalHeader>
        <CModalBody>{handleForms()}</CModalBody>
      </CModal>
    </>
  );
};

Forms.propTypes = {
  type: PropTypes.string,
  typeFor: PropTypes.string,
  title: PropTypes.string,
  buttonClass: PropTypes.string,
  buttonText: PropTypes.string,
  customClass: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
  setAlreadyData: PropTypes.func.isRequired,
  item: PropTypes.func,
  disabled: PropTypes.bool,
};

Forms.defaultProps = {
  type: '',
  typeFor: '',
  title: 'Ferreteria',
  buttonClass: '',
  buttonText: 'Save',
  customClass: 'Forms',
  item: {},
  disabled: false,
};

export default Forms;
