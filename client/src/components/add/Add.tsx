import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Add(props: Props) {
  const handleSubmit = (e:Event) => {
    e.preventDefault();
  }
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add {props.slug}</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "avatar")
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>send</button>
        </form>
      </div>
    </div>
  );
}

export default Add;
