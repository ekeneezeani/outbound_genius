import { doc, setDoc, collection, addDoc } from "firebase/firestore";

import { db, storage } from "../../firestore";

export const addNewProduct = async (data) => {
  try {
    // Add a new document in collection "cities"
    const doc = await addDoc(collection(db, "products"), data);

    return doc;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
