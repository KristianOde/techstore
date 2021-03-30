import React, { useState, useEffect } from "react";
import { useAuth } from "../firebase/context/authContext";
import { useNavigate } from "react-router-dom";
import "../../styles/profile.css";

import firebase from 'firebase/app';
import 'firebase/firestore';
const db = firebase.firestore()

const ProfilSide = () => {
  const { loggUt, currentUser } = useAuth();
  const navigate = useNavigate();
  const [bruker, setBruker] = useState([]);

  useEffect(() => {
    let unsubscribeSnapshot;
    const unsubscribeAuth = firebase.auth().onAuthStateChanged(() => {
        unsubscribeSnapshot = db
          .collection("Brukere")
          .where("epost", "==", currentUser.email)
          .onSnapshot((snapshot) => {
            setBruker(snapshot.docs.map((doc) => doc.data()));
          });
    });
    return () => {
      unsubscribeAuth();
      unsubscribeSnapshot && unsubscribeSnapshot();
    };
  }, []);
  
  async function onSubmit() {
    await loggUt().then(navigate("/"));
  }

  return (
    <div>
      <div className="userControlBoard">
        <div className="userControlBox">
          <table className="userInfoTable">
            <tbody>
              <tr>
                <th colSpan="3" className="userInfoTableHeader">
                  Brukerinformasjon
                </th>
              </tr>
              <tr>
                <th>Brukernavn</th>
                <td key="brukernavn">{bruker.map(({brukernavn}) => brukernavn)}</td>
                <th>
                  <button></button>
                </th>
              </tr>
              <tr>
                <th>Epost</th>
                <td key="epost">{bruker.map(({epost}) => epost)}</td>
              </tr>
              <tr>
                <th>Passord</th>
                <td>********</td>
                <th>
                  <button></button>
                </th>
              </tr>
              <tr>
                <th>Profil opprettet</th>
                <td>Mangler funksjon</td>
              </tr>
              <tr>
                <th>Adresse</th>
                <td>Mangler funksjon</td>
                <th>
                  <button></button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="profileButton">
          <button onClick={onSubmit}>Logg ut</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilSide;
