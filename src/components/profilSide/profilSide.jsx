import React, { useState, useEffect } from "react";
import { useAuth } from "../firebase/context/authContext";
import { useNavigate } from "react-router-dom";
import "../../styles/profile.css";

import firebase from 'firebase/app';
import 'firebase/firestore';
const db = firebase.firestore()

const ProfilSide = () => {
  const { loggUt } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let unsubscribeSnapshot;
    const unsubscribeAuth = firebase.auth().onAuthStateChanged(() => {
        unsubscribeSnapshot = db
          .collection("Brukere")
          .where("epost", "==", "mikaae@hotmail.com")
          .onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => doc.data()));
          });
    });
    return () => {
      unsubscribeAuth();
      unsubscribeSnapshot && unsubscribeSnapshot();
    };
  });
  
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
                
                <td>
                  <button></button>
                </td>
              </tr>
              <tr>
                <th>Epost</th>
                
              </tr>
              <tr>
                <th>Passord</th>
                <td>********</td>
                <td>
                  <button></button>
                </td>
              </tr>
              <tr>
                <th>Profil opprettet</th>
                <td>Mangler funksjon</td>
              </tr>
              <tr>
                <th>Adresse</th>
                <td>Mangler funksjon</td>
                <td>
                  <button></button>
                </td>
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
