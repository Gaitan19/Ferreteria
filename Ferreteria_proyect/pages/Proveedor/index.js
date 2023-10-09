import DataTable from '@/components/DataTable';
import HeadPage from '@/components/HeadPage';
import Layout from '@/components/Layout';
import handleApiRequest from '@/services';
import { CTooltip } from '@coreui/react';
import { Button } from '@mui/material';
import { useState, useEffect, useCallback } from 'react';

const Proveedor = () => {
  const [alreadyData, setAlreadyData] = useState(false);
  const [dataProveedores, setDataProveedores] = useState([]);
  const [dataRow, setDataRow] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const { data, status } = await handleApiRequest(
        'GET',
        '/Proveedor/Get',
        '',
      );

      setDataProveedores(data);
    } catch (error) {
      alertMessage.error(error);
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
                setData(row);
                setVisible(true);
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
                setData(row);
                setVisible(true);
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
      console.log('la data de los provedores es:', dataProveedores);
      console.log('las filas soNP', temRow);
      setDataRow(temRow);
      setAlreadyData(true);
    }
  }, [dataProveedores, dataRow]);

  return (
    <>
      <HeadPage />
      <Layout>
        <div className="Proveedor">
          <h2>Proveedores</h2>
          <div className="Container-table">
            <DataTable columns={columns} rows={dataRow} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Proveedor;
