import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { useProductFilterContext } from "../categories/hooks/useProductFilter";
const db = firebase.firestore();

const useFirestoreCategories = () => {
  const [produkter, setProdukter] = useState([]);
  const { urlFilterParameter } = useProductFilterContext();

  var tabell = ["tabell"];

  var valgteKategorier = urlFilterParameter.split("&");
  var kategoriNavn = [
    "motherboard","cpu","Corsair","HyperX","Kingston",
    "G.SKILL","1600MHz","2400MHz","2666MHz","3200MHz","4GB",
    "8GB","16GB","32GB","ASUS","Asrock","Gigabyte","MSI","ATX",
    "Micro-ATX","Gainward","Mini-ITX","gpu","Zotac","Nvidia RTX 2060",
    "Nvidia RTX 2070","Nvidia RTX 2080","AMD Radeon RX 6900","AMD Radeon RX 6800",
    "AMD Radeon RX 6700 XT","Nvidia RTX 3090","Nvidia RTX 3080","Nvidia RTX 3070",
    "Nvidia RTX 3060","Nvidia RTX 2090","Intel","AMD","Core i7","1GHz - 2GHz",
    "2GHz - 3GHz","3GHz - 4GHz","4Ghz og over","Core i3","Core i5","Core i9",
    "Ryzen 3","Ryzen 5","Ryzen 7","Ryzen 9","LGA1151","LGA1200","LGA2066","LGA3647","AM4",
  ];

  useEffect(() => {
    const unsubscribeAuth = firebase.auth().onAuthStateChanged(() => {
      // Går igjennom kategoriNavn
      for (let i = 0; i < kategoriNavn.length; i++) {
        var unsubscribeSnapshot = db.collection("Produkter");
        var kategoriNavnIndex = kategoriNavn.indexOf(valgteKategorier[i]);
        // Sjekker for de valgte kategoriene
        switch (valgteKategorier[i]) {
          case kategoriNavn[kategoriNavnIndex]:
            // Sletter
            if (tabell.includes(kategoriNavn[kategoriNavnIndex])) {
              tabell.splice(
                tabell.findIndex(
                  (tabell) => tabell === kategoriNavn[kategoriNavnIndex]
                ),
                1
              );
            } else {
              // Legger til
              tabell.push(kategoriNavn[kategoriNavnIndex]);
            }
            break;
          default:
            break;
        }
      }
      // Går igjennom kategoriNavn
      for (let index = 0; index < kategoriNavn.length; index++) {
        let kategori = "Kategori." + kategoriNavn[index];

        // Legger til en where spørring på variabelen unsubscribeSnapshot
        if (tabell.includes(kategoriNavn[index])) {
          unsubscribeSnapshot = unsubscribeSnapshot.where(kategori, "==", true);
        }
      }

      // Lager snapshot av sorterte produkter
      unsubscribeSnapshot.onSnapshot((snapshot) => {
        setProdukter(snapshot.docs.map((doc) => doc.data()));
      });
    });
    return () => {
      unsubscribeAuth();
    };
  }, [urlFilterParameter]);

  return [produkter, setProdukter];
};

export default useFirestoreCategories;
