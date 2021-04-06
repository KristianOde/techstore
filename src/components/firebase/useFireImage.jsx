import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const useFireImage = (productID, test) => {
  const [produkter, setProdukter] = useState([]);
  let storageRef = firebase.storage().ref(productID);

  useEffect(() => {
    const fetchImages = async () => {
      
      let result = await firebase.storage().ref(productID).list()
      /*if (test == "yaya") {
        let result2 = firebase.storage().ref().child(productID).listAll();
      }*/
      let urlPromises = result.items.map((imageRef) =>
        imageRef.getDownloadURL()
      );
      return Promise.all(urlPromises);
    };
    const loadImages = async () => {
      const urls = await fetchImages();
      setProdukter(urls);
      
    };
    loadImages();
  }, []);

  return [produkter];
};

export default useFireImage;
