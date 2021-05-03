import  React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
const db = firebase.firestore();

const useFirestoreProducts = (productID) => {
  const [produkter, setProdukter] = useState([]);

  useEffect(() => {
    let unsubscribeSnapshot;
    const unsubscribeAuth = firebase.auth().onAuthStateChanged(() => {
      switch (productID) {
        // Viser alle produktene
        case "all":
          unsubscribeSnapshot = db
            .collection("Produkter")
            .onSnapshot((snapshot) => {
              setProdukter(snapshot.docs.map((doc) => doc.data()));
            });
          break;
          // Viser alle produktene som er på tilbud
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
          // Viser ett produkt
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
