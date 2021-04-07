import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const useFireImage = (productID, test) => {
  const [produkter, setProdukter] = useState([]);
  let storageRef = firebase.storage().ref();

  useEffect(() => {
    switch (test) {
      case null:
        const fetchManyImages = async () => {
          //console.log(productID + "Hallaballa")
          let result = await storageRef.child(productID).listAll();
          let urlPromises = result.items.map((imageRef) =>
            imageRef.getDownloadURL()
          );
          return Promise.all(urlPromises);
        };
        const loadManyImages = async () => {
          const urls = await fetchManyImages();
          setProdukter(urls);
        };
        loadManyImages();
        break;

      default:
        const fetchImages = async () => {
          let result = await firebase.storage().ref(productID).list();
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
        break;
    }

  }, []);

  return [produkter];
};

export default useFireImage;
