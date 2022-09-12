import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore";
import { firestore } from "../firebase";

// Saving new Item
export const saveItem = async (data) => {
    await setDoc(doc(firestore, "farmItems", `${Date.now()}`), data, {
      merge: true,
    });
  };
  
// getall farm items
export const getAllFarmItems = async () => {
    const items = await getDocs(
      query(collection(firestore, "farmItems"), orderBy("id", "desc"))
    );
  
    return items.docs.map((doc) => doc.data());
  };