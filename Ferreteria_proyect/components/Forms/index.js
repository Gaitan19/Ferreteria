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
          ></FormProveedor>
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
};

Forms.defaultProps = {
  type: '',
  typeFor: '',
  title: 'Ferreteria',
  buttonClass: '',
  buttonText: 'Save',
  customClass: 'Forms',
};

export default Forms;
