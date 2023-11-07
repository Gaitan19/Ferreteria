import { CSpinner, CTooltip } from '@coreui/react';
import { useState, useEffect, useCallback } from 'react';
import { FaPlus } from 'react-icons/fa';
import DataTable from '@/components/DataTable';
import HeadPage from '@/components/HeadPage';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import Forms from '@/components/Forms';
import handleApiRequest from '@/services';
import { alertMessage } from '@/components/Alert';

const Inventario = () => {
  const [alreadyData, setAlreadyData] = useState(false);
  const [dataProductos, setDataProductos] = useState([]);
  const [dataProducto, setDataProducto] = useState({});
  const [dataRow, setDataRow] = useState([]);
  const [visible, setVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [showVisible, setShowVisible] = useState(false);
  const [typeForm, setTypeForm] = useState('add');

  const fetchData = useCallback(async () => {
    try {
      const { data, status } = await handleApiRequest(
        'GET',
        '/Producto/Get',
        '',
      );
      setDataProductos(data);
    } catch (error) {
      alertMessage.error(error);
    }
  }, [setDataProductos]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
    { field: 'nombre', headerName: 'Nombre', width: 130 },
    { field: 'stock', headerName: 'Stock', width: 50 },
    { field: 'precio', headerName: 'Precio', width: 60 },

    // show--------------------------
    {
      field: 'show',
      headerName: 'show',
      renderCell: (cellValues) => {
        return (
          <CTooltip content="print pdf" placement="bottom">
            <Button
              variant="contained"
              color="primary"
              onClick={(event) => {
                const { row } = cellValues;
                const tempProveedor = dataProductos.filter(
                  (proveedorTemp) => proveedorTemp.id === row.id,
                );
                setDataProducto(tempProveedor);
                setShowVisible(true);
              }}
            >
              show
            </Button>
          </CTooltip>
        );
      },
    },

    {
      field: 'editar',
      headerName: 'Editar',
      renderCell: (cellValues) => {
        // las funcion editar--------------------------------

        const handleClickEdit = (event) => {
          const { row } = cellValues;
          const tempProveedor = dataProductos.filter(
            (proveedorTemp) => proveedorTemp.id === row.id,
          );
          setDataProducto(tempProveedor);
          setEditVisible(true);
        };

        // ______________________________________________

        return (
          <CTooltip content="print pdf" placement="bottom">
            <Button
              variant="contained"
              color="primary"
              onClick={handleClickEdit}
            >
              Editar
            </Button>
          </CTooltip>
        );
      },
    },

    // eliminar-------------------------------
    {
      field: 'eliminar',
      headerName: 'eliminar',
      renderCell: (cellValues) => {
        return (
          <CTooltip content="print pdf" placement="bottom">
            <Button
              variant="contained"
              color="primary"
              onClick={(event) => {
                const { row } = cellValues;

                const tempData = dataProductos.filter((data) => {
                  if (data.id !== row.id) {
                    return data;
                  }
                  handleApiRequest('PUT', '/Proveedor/eliminar', data);
                });
                setAlreadyData(false);
                setDataProductos(tempData);
              }}
            >
              eliminar
            </Button>
          </CTooltip>
        );
      },
    },
  ];

  useEffect(() => {
    if (dataProductos.length > 0 && alreadyData === false) {
      const temRow = [];
      dataProductos.forEach((producto) => {
        if (producto.unidadStock >= 0) {
          temRow.push({
            id: producto.id,
            nombre: producto.nombreProducto,
            stock: producto.unidadStock,
            precio: producto.precioUnitario,
          });
        }
      });
      setDataRow(temRow);
      setAlreadyData(true);
    }
  }, [dataProductos, dataRow]);

  const handleAdd = () => {
    setTypeForm('agregar');
    setVisible(true);
  };

  return (
    <>
      <HeadPage />
      <Layout>
        <div className="Proveedor">
          <h2>Inventario</h2>
          <div className="Container-table">
            {alreadyData ? (
              <>
                <DataTable
                  columns={columns}
                  rows={dataRow}
                  customClass="Table"
                />
                <Button customClass="Button-add" onClick={handleAdd}>
                  <FaPlus />
                </Button>
                <Forms
                  visible={visible}
                  setVisible={setVisible}
                  type="proveedor"
                  setData={setDataProductos}
                  setAlreadyData={setAlreadyData}
                />
                <Forms
                  visible={editVisible}
                  setVisible={setEditVisible}
                  type="proveedor"
                  typeFor="editar"
                  setData={setDataProductos}
                  setAlreadyData={setAlreadyData}
                  item={dataProducto[0]}
                />
                <Forms
                  visible={showVisible}
                  setVisible={setShowVisible}
                  type="proveedor"
                  typeFor="show"
                  disabled
                  setData={setDataProductos}
                  setAlreadyData={setAlreadyData}
                  item={dataProducto[0]}
                />
              </>
            ) : (
              <CSpinner />
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Inventario;
