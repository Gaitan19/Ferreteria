import PropTypes from 'prop-types';
import {
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavbarToggler,
} from '@coreui/react';
import { useState } from 'react';
import Menu from '../Menu';

const Layout = (props) => {
  const { children, customClass } = props;

  const [visible, setVisible] = useState(true);

  return (
    <div className="Container">
      <CNavbar
        colorScheme="light"
        className="bg-light Navbar"
        placement="sticky-top"
      >
        <CContainer fluid>
          <CNavbarBrand></CNavbarBrand>
          <CNavbarToggler
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            onClick={() => setVisible(!visible)}
          />
        </CContainer>
      </CNavbar>

      <div className="Container-content">
        <div className={`Container-options ${customClass}`}>{children}</div>
      </div>

      <Menu visible={visible} setVisible={setVisible}></Menu>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  customClass: PropTypes.string,
};

Layout.defaultProps = {
  children: <></>,
  customClass: '',
};

export default Layout;
