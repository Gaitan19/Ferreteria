import {
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
  CNavItem,
  CNavLink,
  CNavbarNav,
} from '@coreui/react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { menuOptions, routes } from '@/constants/routes';
import { FaSignOutAlt } from 'react-icons/fa';
import Button from '../Button';

const Menu = (props) => {
  const { visible, setVisible } = props;
  const router = useRouter();

  const renderMenu = () => {
    return menuOptions.map((option) => {
      const isActive = router.pathname === option.route;
      // console.log('option :>> ', option);
      // console.log('isActive :>> ', isActive);
      // console.log('_____________________________');
      return (
        <CNavItem
          key={v4()}
          className={`Item Menu-border ${isActive && 'Item-active'}`}
        >
          <CNavLink href={option.route}>{option.text}</CNavLink>
        </CNavItem>
      );
    });
  };

  const handleLogout = () => {
    router.push(routes.login);
  };

  return (
    <COffcanvas
      id="offcanvasNavbar"
      placement="end"
      portal={false}
      visible={visible}
      onHide={() => setVisible(false)}
      backdrop={false}
      className="Menu"
      scroll
    >
      <COffcanvasHeader className="Menu-border">
        <COffcanvasTitle>Menu</COffcanvasTitle>
        <CCloseButton
          className="text-reset"
          onClick={() => setVisible(false)}
        />
      </COffcanvasHeader>

      <COffcanvasBody className="Menu-body">
        <CNavbarNav>
          {renderMenu()}
          <CNavItem className="Item">
            <Button
              buttonText="Cerrar sesion"
              customClass="Button-logout"
              onClick={handleLogout}
            >
              <FaSignOutAlt></FaSignOutAlt>
            </Button>
          </CNavItem>
        </CNavbarNav>
      </COffcanvasBody>
    </COffcanvas>
  );
};

Menu.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};

export default Menu;
