import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
const db = firebase.firestore();

const useFirestoreProducts = (productID) => {
  const [produkter, setProdukter] = useState([]);

  useEffect(() => {
    let unsubscribeSnapshot;
    const unsubscribeAuth = firebase.auth().onAuthStateChanged(() => {
      switch (productID) {
        case "all":
          unsubscribeSnapshot = db
            .collection("Produkter")
            .onSnapshot((snapshot) => {
              setProdukter(snapshot.docs.map((doc) => doc.data()));
            });
            
          break;
          case 1: case 2: case 3: case 4: case 5: case 6:// Kategorier (1 = skjermkort, 2 = prosessor etc.)
            unsubscribeSnapshot = db
            .collection("Produkter")
            .where("Kategori", "==", productID)
            .where("Prosessor", "==", "Nvidia RTX 3070")
            .onSnapshot((snapshot) => {
              setProdukter(snapshot.docs.map((doc) => doc.data()));
            });
          break;
          case "tilbud":
            unsubscribeSnapshot = db
            .collection("Produkter")
            .where("Tilbud", "!=", 0)
            .onSnapshot((snapshot) => {
              setProdukter(snapshot.docs.map((doc) => doc.data()));
            });
          break;
          case "search":
            unsubscribeSnapshot = db
            .collection("Produkter")
            .whereGreaterThanOrEqualTo("Navn", "ASUS GeForce RTX 3070 TUF OC")
            .onSnapshot((snapshot) => {
              setProdukter(snapshot.docs.map((doc) => doc.data()));
            });
          break;
          case "ettProdukt":
            unsubscribeSnapshot = db
            .collection("Produkter")
            .where("Navn", "==", productID)
            .onSnapshot((snapshot) => {
              setProdukter(snapshot.docs.map((doc) => doc.data()));
            });
          break;
        default:
          db.collection("Produkter")
            .doc(productID)
            .get()
            .then((doc) => {
              if (doc.exists) {
                //console.log("Document data:", doc.data());
                setProdukter(doc.data());
              } else {
                console.log("No such document!");
              }
            });
      }

    });
    return () => {
      unsubscribeAuth();
      unsubscribeSnapshot && unsubscribeSnapshot();
    };
  }, []);

  return [produkter];
};

export default useFirestoreProducts;
