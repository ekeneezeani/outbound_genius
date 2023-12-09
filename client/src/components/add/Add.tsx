import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import { useEffect, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import axios from "axios";
type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Add(props: Props) {
  const [data, setData] = useState({});
  const [file, setfile] = useState<any>(null);
  const [uploadIsComplete, setUploadIsComplete] = useState<number | null>(null)
  // console.log(data);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadIsComplete(progress)
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    axios.post("http://localhost:8080/addNewProduct", data).then((response) => {
      console.log(response.data);
    });
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const id = e.target.id;
    setData({ ...data, [id]: e.target.value });
  };
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add {props.slug}</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "image" && item.field !== "createdAt")
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input
                  id={column.field}
                  type={column.type}
                  placeholder={column.field}
                  onChange={(e) => handleInput(e)}
                />
              </div>
            ))}
          <div className="item">
            <label>Image</label>
            <input
              type="file"
              id="file"
              onChange={(e) => setfile(e.target.files[0])}
            />
          </div>
          <button disabled={uploadIsComplete !== null && uploadIsComplete < 100}>send</button>
        </form>
      </div>
    </div>
  );
}

export default Add;
