import PropTypes from 'prop-types';

import { DataGrid, customClass } from '@mui/x-data-grid';

const DataTable = (props) => {
  const { columns, rows, options, customClass } = props;

  return (
    <DataGrid
      className={customClass}
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
  customClass: PropTypes.string,
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
  customClass: '',
};
export default DataTable;
