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

const Categorias = () => {
  const [alreadyData, setAlreadyData] = useState(false);
  const [dataCategorias, setDataCategorias] = useState([]);
  const [dataRow, setDataRow] = useState([]);
  const [visible, setVisible] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await handleApiRequest('GET', '/Categoria/Get', '');
      setDataCategorias(data);
    } catch (error) {
      alertMessage.error(error);
    }
  }, [setDataCategorias]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'nombreCategoria', headerName: 'Nombre', width: 130 },
    { field: 'descripcion', headerName: 'Descripcion', width: 130 },

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

                const tempData = dataCategorias.filter((data) => {
                  if (data.id !== row.id) {
                    return data;
                  }
                  handleApiRequest('DELETE', '/Categoria/Delete', data);
                });
                setAlreadyData(false);
                setDataCategorias(tempData);
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
    if (dataCategorias.length > 0 && alreadyData === false) {
      const temRow = [];
      dataCategorias.forEach((categoria) => {
        temRow.push({
          id: categoria.id,
          nombreCategoria: categoria.nombreCategoria,
          descripcion: categoria.descripcion,
        });
      });
      setDataRow(temRow);
      setAlreadyData(true);
    }
  }, [dataCategorias, dataRow]);

  const handleAdd = () => {
    setVisible(true);
  };

  return (
    <>
      <HeadPage />
      <Layout>
        <div className="Proveedor">
          <h2>Categoria Productos</h2>
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
                  type="categoriaProducts"
                  //   setDataCategorias={setDataCategorias}
                  setData={setDataCategorias}
                  setAlreadyData={setAlreadyData}
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

export default Categorias;
