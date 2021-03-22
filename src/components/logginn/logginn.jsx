import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../firebase/context/authContext";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/form.css";

const Logginn = () => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const { loggInnFirebase } = useAuth();
  const navigate = useNavigate();

  async function onSubmit(e) {
    let result = await loggInnFirebase(e.brukernavn, e.passord);
    if (result.error) {
      console.log("sadsadsad");
    } else {
      navigate("/profile");
    }
  }

  return (
    <div className="centerform">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Logg inn</h1>
        <label htmlFor="username">Epost</label>
        <input
          className="forminput"
          name="brukernavn"
          id="brukernavnId"
          ref={register({ required: true, minLength: 5 })}
        />

        {errors.brukernavn && errors.brukernavn.type === "required" && (
          <h1 className="formerror">Required</h1>
        )}
        {errors.brukernavn && errors.brukernavn.type === "minLength" && (
          <h1 className="formerror">Minimum required length is 5 letters</h1>
        )}

        <label htmlFor="password">Passord</label>
        <input
          className="forminput"
          name="passord"
          type="password"
          id="passordID"
          ref={register({ required: true })}
        />

        {errors.passord && errors.passord.type === "required" && (
          <h1 className="formerror">Required</h1>
        )}

        <input disabled={loading} type="submit" className="formknapp" />
        <p className="message">
          Har ikke bruker? <Link to="/registrer">Lag en konto</Link>
        </p>
      </form>
    </div>
  );
};

export default Logginn;
