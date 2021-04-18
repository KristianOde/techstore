import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import Categories from '../categories/categories.json'
import ProductFilterProvider, {
  useProductFilterContext,
} from "../categories/hooks/useProductFilter";
const db = firebase.firestore();

const useFirestoreCategories = () => {
  const [produkter, setProdukter] = useState([]);
  const { urlFilterParameter } = useProductFilterContext();
  //console.log(urlFilterParameter)

  var tester2 = ["hjhj", "dssd", "ffgfs", "tretr"];

  var tester = urlFilterParameter.split("&");
  var kategoriNavn = [
    "cpu",
    "gpu",
    "Intel",
    "AMD",
    "Core i7",
    "1GHz - 2GHz",
    "2GHz - 3GHz",
    "3GHz - 4GHz",
    "4Ghz og over",
    "Core i3",
    "Core i5",
    "Core i9",
    "Ryzen 3",
    "Ryzen 5",
    "Ryzen 7",
    "Ryzen 9",
    "LGA1151",
    "LGA1200",
    "LGA2066",
    "LGA3647",
    "AM4",
  ];

  useEffect(() => {
    const unsubscribeAuth = firebase.auth().onAuthStateChanged(() => {
      for (let i = 0; i < 20; i++) {
        var unsubscribeSnapshot = db.collection("Produkter");

        var kategoriNavnIndex = kategoriNavn.indexOf(tester[i]);
        switch (tester[i]) {
          case kategoriNavn[kategoriNavnIndex]:
            if (tester2.includes(kategoriNavn[kategoriNavnIndex])) {
              tester2.splice(
                tester2.findIndex(
                  (tester2) => tester2 === kategoriNavn[kategoriNavnIndex]
                ),
                1
              );
            } else {
              tester2.push(kategoriNavn[kategoriNavnIndex]);
            }
            break;
          default:
            break;
        }
      }
      for (let index = 0; index < 20; index++) {
        let kategori = "Kategori." + kategoriNavn[index];

        if (tester2.includes(kategoriNavn[index])) {
          unsubscribeSnapshot = unsubscribeSnapshot.where(kategori, "==", true);
        }
      }


      

      unsubscribeSnapshot.onSnapshot((snapshot) => {
        setProdukter(snapshot.docs.map((doc) => doc.data()));
      });
      console.log(unsubscribeSnapshot);
    });
    return () => {
      unsubscribeAuth();
    };
  }, [urlFilterParameter]);

  return [produkter];
};

export default useFirestoreCategories;
