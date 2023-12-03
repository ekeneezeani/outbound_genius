import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./products.scss";
import { products } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";



const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "image",
    headerName: "image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "./noavatar.png"} alt="" />;
    },
  },

  {
    field: "title",
    headerName: "Product Name",
    type: "string",
    width: 250,
    editable: true,
  },
  {
    field: "color",
    headerName: "Color",
    type: "string",
    width: 150,
    editable: true,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 110,
    editable: true,
  },
  {
    field: "price",
    headerName: "Price",
    type: "string",
    width: 110,
    editable: true,
  },
  {
    field: "inStock",
    headerName: "In Stock",
    type: "boolean",
    width: 110,
    editable: true,
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Product</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {open && <Add slug ="product" setOpen={setOpen} columns={columns}/>}
    </div>
  );
};

export default Products;
