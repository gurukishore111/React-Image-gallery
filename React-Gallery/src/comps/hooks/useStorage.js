import { useState, useEffect } from "react";
import {
  projectStorage,
  projectfirebaseStore,
  timestamp,
} from "../../firebase/config";

const useStrorage = (file) => {
  const [progress, setprogress] = useState(0);
  const [error, seterror] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //ref
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectfirebaseStore.collection("images");
    storageRef.put(file).on(
      "state_changed",
      (Snap) => {
        let percentage = (Snap.bytesTransferred / Snap.totalBytes) * 100;
        setprogress(percentage);
      },
      (err) => {
        seterror(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);
  return { progress, url, error };
};
export default useStrorage;
