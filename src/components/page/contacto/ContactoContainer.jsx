import { useState } from "react";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Contacto from "./Contacto";

const ContactoContainer = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (evento) => {
    evento.preventDefault();

    let consulta = {
      contact: data,
      date: serverTimestamp(),
    };

    const consultaCollection = collection(db, "consulta");
    addDoc(consultaCollection, consulta);
  };

  const handleChange = (evento) => {
    setData({ ...data, [evento.target.name]: evento.target.value });
  };

  return <Contacto handleChange={handleChange} handleSubmit={handleSubmit} />;
};

export default ContactoContainer;
