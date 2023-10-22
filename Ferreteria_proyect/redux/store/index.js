import { createStore } from 'redux';
import ferreteriaReducer from '@/redux/reducers';
import handleApiRequest from '@/services';

const getAllProveedores = async () => {
  const { data } = await handleApiRequest('GET', '/Proveedor/Get', '');
  return data;
};

const loadFromApi = async () => {
  const initialState = {
    ferreteria: {
      proveedores: await getAllProveedores(),
      productos: [],
    },
  };

  return initialState;
};

const store = createStore(ferreteriaReducer, loadFromApi());

export default store;
