import PropTypes from 'prop-types';

import { DataGrid } from '@mui/x-data-grid';

const DataTable = (props) => {
  const { columns, rows, options } = props;

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      options={options}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      disableRowSelectionOnClick
      disableColumnSelector
    />
  );
};

DataTable.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  options: PropTypes.object,
};

DataTable.defaultProps = {
  columns: [],
  rows: [],
  options: {
    filter: true,
    filterType: 'dropdown',
    responsive: 'vertical',
    rowsPerPage: 5,
  },
};
export default DataTable;
