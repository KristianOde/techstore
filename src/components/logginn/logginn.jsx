import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useAuth } from '../firebase/context/authContext'
import { useNavigate } from "react-router-dom";

const Logginn = () => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false)
  const { loggInnFirebase } = useAuth()
  const navigate = useNavigate()

  async function onSubmit(e) {
    let result = await loggInnFirebase(e.brukernavn, e.passord)
    if (result.error) {
      console.log("sadsadsad")
    } else {
      navigate('profil');
    }
  }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Logg inn</h1>
        <label htmlFor="username">Epost</label>
        <input name="brukernavn" id="brukernavnId" ref={register({ required: true, minLength: 5 })}/>

        {errors.brukernavn && errors.brukernavn.type === "required" && (
        <p>Required</p>)}
        {errors.brukernavn && errors.brukernavn.type === "minLength" && (
        <p>Minimum required length is 5 letters</p>)}

        <label htmlFor="password">Passord</label>
        <input name="passord" id="passordID" ref={register({ required: true })}/>

        {errors.passord && errors.passord.type === "required" && (
        <p>Required</p>)}

        <input disabled={loading} type="submit"/>
      </form>
    );
}

export default Logginn