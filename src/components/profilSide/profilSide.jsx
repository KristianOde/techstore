import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../firebase/context/authContext";
import { useNavigate } from "react-router-dom";
import "../../styles/form.css";

const ProfilSide = () => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const { loggUt } = useAuth();

  const navigate = useNavigate();

  async function onSubmit() {
    await loggUt().then(navigate("/"));
  }

  return (
    <div>
      Logg ut?
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input title="Logg Ut" disabled={loading} type="submit" className="formknapp"/>
      </form>
    </div>
  );
};

export default ProfilSide
