import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CForm,
  CFormInput,
  CButton,
} from '@coreui/react';
import { useState } from 'react';

const Menu = () => {
  const [visible, setVisible] = useState(false);
  return (
    <CNavbar colorScheme="light" className="bg-light">
      <CContainer fluid>
        <CNavbarBrand>User</CNavbarBrand>
        <CNavbarToggler
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
          onClick={() => setVisible(!visible)}
        />
        <COffcanvas
          id="offcanvasNavbar"
          placement="end"
          portal={false}
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <COffcanvasHeader>
            <COffcanvasTitle>Menu</COffcanvasTitle>
            <CCloseButton
              className="text-reset"
              onClick={() => setVisible(false)}
            />
          </COffcanvasHeader>

          <COffcanvasBody>
            <CNavbarNav>
              <CNavItem>
                <CNavLink href="#">Hola</CNavLink>
              </CNavItem>
            </CNavbarNav>
          </COffcanvasBody>
        </COffcanvas>
      </CContainer>
    </CNavbar>
  );
};

export default Menu;
