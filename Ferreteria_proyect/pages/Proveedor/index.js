import DataTable from '@/components/DataTable';
import HeadPage from '@/components/HeadPage';
import Layout from '@/components/Layout';
import { CSpinner, CTooltip } from '@coreui/react';
import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Button from '@/components/Button';
import { FaPlus } from 'react-icons/fa';
import Forms from '@/components/Forms';

const Proveedor = () => {
  const [alreadyData, setAlreadyData] = useState(false);
  const [dataProveedores, setDataProveedores] = useState([]);
  const [dataRow, setDataRow] = useState([]);
  const [visible, setVisible] = useState(false);
  const [typeForm, setTypeForm] = useState('add');

  const state = useSelector((state) => state);

  const fetchData = useCallback(async () => {
    if (state instanceof Promise) {
      state.then((resolvedState) => {
        if (resolvedState && resolvedState.ferreteria.proveedores) {
          const { proveedores } = resolvedState.ferreteria;
          setDataProveedores(proveedores);
        }
      });
    } else if (state.ferreteria.proveedores) {
      setDataProveedores(state.ferreteria.proveedores);
    }
  }, [setDataProveedores]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nombre', headerName: 'Nombre', width: 130 },
    { field: 'telefono', headerName: 'Telefono', width: 130 },

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
                console.log('di click', cellValues);
                const { row } = cellValues;
                console.log(row);
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
        return (
          <CTooltip content="print pdf" placement="bottom">
            <Button
              variant="contained"
              color="primary"
              onClick={(event) => {
                console.log('di click', cellValues);
                const { row } = cellValues;
                console.log('info provedoor:', row);
              }}
            >
              Editar
            </Button>
          </CTooltip>
        );
      },
    },

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
                console.log('di click', cellValues);
                const { row } = cellValues;
                console.log(row);
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
    if (dataProveedores.length > 0 && alreadyData === false) {
      const temRow = [];
      dataProveedores.forEach((proveedor) => {
        temRow.push({
          id: proveedor.id,
          nombre: proveedor.nombreProveedor,
          telefono: proveedor.telefonoProveedor,
        });
      });
      setDataRow(temRow);
      setAlreadyData(true);
    }
  }, [dataProveedores, dataRow]);

  const handleAdd = () => {
    console.log('di add');
    setVisible(true);
  };

  return (
    <>
      <HeadPage />
      <Layout>
        <div className="Proveedor">
          <h2>Proveedores</h2>
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
                  typeFor={typeForm}
                ></Forms>
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

export default Proveedor;
