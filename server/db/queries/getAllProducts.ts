import { db, storage } from "../../firestore";
import { getDocs, collection, query, where } from "firebase/firestore";

export const getAllProducts = async () => {
  const q = query(collection(db, "products"));
  const querySnapshot = await getDocs(q);

  const products = [];

  querySnapshot.forEach((e) => {
    let product = {};

    products.push({ id: e.id, ...e.data() });
  });

  return products;
};
