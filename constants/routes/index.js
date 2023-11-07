/* eslint-disable import/prefer-default-export */
export const routes = {
  menu: '/Dashboard',
  login: '/',
  option2: '/Inventario',
  option3: '/Proveedor',
  option4: '/Facturar',
  option5: '/Categorias',
};

export const menuOptions = [
  {
    text: 'Dashboard',
    route: routes.menu,
  },
  {
    text: 'Inventario',
    route: routes.option2,
  },
  {
    text: 'Proveedor',
    route: routes.option3,
  },
  {
    text: 'Facturar',
    route: routes.option4,
  },
  {
    text: 'Categorias',
    route: routes.option5,
  },
];
