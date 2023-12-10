import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./salesOrder.scss";

const columns: GridColDef[] = [
  // { field: "id", headerName: "ID", width: 200 },
  {
    field: "channel",
    headerName: "Channel",
    type: "string",
    width: 120,
    editable: true,
  },

  {
    field: "draft",
    headerName: "Draft",
    type: "string",
    width: 120,
    editable: true,
  },
  {
    field: "confimed",
    headerName: "Confirmed",
    type: "string",
    width: 120,
    editable: true,
  },
  {
    field: "packed",
    headerName: "Packed",
    type: "string",
    width: 120,
    editable: true,
  },
  {
    field: "shipped",
    headerName: "Shipped",
    type: "boolean",
    width: 120,
    editable: true,
  },
];

export const rows = [
  {
    id: 1,
    channel: "Direct Sales",
    draft: 0,
    confimed: 0,
    packed: 50,
    shipped: 12
  }
]
const SalesOrder = () => {
  return (
    <div className="salesOrder">
      <div className="title">
        <span>SALES ORDER</span>
      </div>
      <div className="dataTable">
        <DataGrid
          className="dataGrid"
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
        />
      </div>
    </div>
  );
};

export default SalesOrder;
