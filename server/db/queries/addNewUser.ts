import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { db, storage } from "../../firestore";

export const addNewUser = async () => {
  try {
    // Add a new document in collection "cities"
    const doc = await addDoc(collection(db, "cities"), {
      name: "Tokyo",
      country: "Japan",
    });

    return doc;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
