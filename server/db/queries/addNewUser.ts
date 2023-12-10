import {
  doc,
  setDoc,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, storage, auth } from "../../firestore";

export const addNewUser = async (data) => {
  let returnValue;
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    returnValue = res
    await setDoc(doc(db, "users", res.user.uid), {
      ...data,
      timeStamp: serverTimestamp(),
    });
    
  } catch (err) {
    console.log(err);
  }

  return returnValue.user.stsTokenManager.accessToken;
};
