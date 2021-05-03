import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../firebase/context/authContext";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/form.css";

const Registrer = () => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const { registrerBrukerFirebase, registrerBrukerFirestore } = useAuth();
  const navigate = useNavigate();

  // registrerer med Firebase Authentication
  async function onSubmit(e) {
    let result = await registrerBrukerFirebase(e.epost, e.passord);
    let result2 = await registrerBrukerFirestore(e.epost, e.brukernavn, e.passord);
    if (result.error && result2.error) {
      console.log(result);
    } else {
      navigate("/profile");
    }
  }

  return (
    <div className="centerform">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Lag bruker</h1>

        <label htmlFor="epost">Epost</label>
        <input
          className="forminput"
          name="epost"
          id="epostId"
          ref={register({ required: true, minLength: 5 })}
        />
        {errors.epost && errors.epost.type === "required" && (
          <p className="formerror">Required</p>
        )}
        {errors.epost && errors.epost.type === "minLength" && (
          <p className="formerror">Minimum required length is 5 letters</p>
        )}

        <label htmlFor="username">Brukernavn</label>
        <input
          className="forminput"
          name="brukernavn"
          id="brukernavnId"
          ref={register({ required: true, minLength: 5 })}
        />
        {errors.brukernavn && errors.brukernavn.type === "required" && (
          <p className="formerror">Required</p>
        )}
        {errors.brukernavn && errors.brukernavn.type === "minLength" && (
          <p className="formerror">Minimum required length is 5 letters</p>
        )}

        <label htmlFor="password">Passord</label>
        <input
          className="forminput"
          name="passord"
          id="passordID"
          type="password"
          ref={register({ required: true })}
        />
        {errors.passord && errors.passord.type === "required" && (
          <p className="formerror">Required</p>
        )}

        <input disabled={loading} type="submit" className="formknapp" />
        <p className="message">
          Har allerede en bruker? <Link to="/login">Logg inn</Link>
        </p>
      </form>
    </div>
  );
};

export default Registrer;
