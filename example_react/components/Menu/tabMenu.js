import { CNav, CNavItem, CNavLink } from '@coreui/react';
import PropTypes from 'prop-types';

const TabMenu = (props) => {
  const { setActiveKey, activeKey } = props;

  return (
    <>
      <CNav variant="pills" role="tablist" className="Tab">
        <CNavItem role="presentation">
          <CNavLink
            active={activeKey === 1}
            component="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected={activeKey === 1}
            onClick={() => setActiveKey(1)}
          >
            Inicio
          </CNavLink>
        </CNavItem>
        <CNavItem role="presentation">
          <CNavLink
            active={activeKey === 2}
            component="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected={activeKey === 2}
            onClick={() => setActiveKey(2)}
          >
            opction2
          </CNavLink>
        </CNavItem>
        <CNavItem role="presentation">
          <CNavLink
            active={activeKey === 3}
            component="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected={activeKey === 3}
            onClick={() => setActiveKey(3)}
          >
            optiion3
          </CNavLink>
        </CNavItem>
        <CNavItem role="presentation">
          <CNavLink
            active={activeKey === 4}
            component="button"
            role="tab"
            aria-controls="disabled-tab-pane"
            aria-selected={activeKey === 4}
            onClick={() => setActiveKey(4)}
          >
            option4
          </CNavLink>
        </CNavItem>
      </CNav>
    </>
  );
};

TabMenu.propTypes = {
  setActiveKey: PropTypes.func,
  activeKey: PropTypes.number,
};

TabMenu.defaultProps = {
  setActiveKey: () => {},
  activeKey: 1,
};

export default TabMenu;
