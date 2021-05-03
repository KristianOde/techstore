import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const useFireImage = (productID, switchParameter) => {
  const [produkter, setProdukter] = useState([]);
  let storageRef = firebase.storage().ref();

  useEffect(() => {
    let mounted = true;
    const unsubscribeAuth = firebase.auth().onAuthStateChanged(() => {
      // Henter alle bilder fra firebase storage
      switch (switchParameter) {
        case null:
          const fetchManyImages = async () => {
            let result = await storageRef.child(productID).listAll();
            let urlPromises = result.items.map((imageRef) =>
              imageRef.getDownloadURL()
            );
            return Promise.all(urlPromises);
          };
          const loadManyImages = async () => {
            const urls = await fetchManyImages();
            if (mounted) setProdukter(urls);
          };
          loadManyImages();
          break;

        default:
          // henter ett bilde fra firebase storage
          const fetchImages = async () => {
            let result = await firebase.storage().ref(productID).list();
            let urlPromises = result.items.map((imageRef) =>
              imageRef.getDownloadURL()
            );
            return Promise.all(urlPromises);
          };
          const loadImages = async () => {
            const urls = await fetchImages();
            if (mounted) setProdukter(urls);
          };
          loadImages();
          break;
      }
    });
    return () => {
      unsubscribeAuth();
      {
        mounted = false;
      }
    };
  }, []);

  return [produkter];
};

export default useFireImage;
