import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Scss
import "./Form.scss";

// Atoms
import Button from "../Button/Button";

interface FormDataprops {
  size: "S" | "M" | "L";
}

type FormErrors = {
  name?: string;
  phone?: string;
  email?: string;
};

const Form: React.FC<FormDataprops> = ({ size }) => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});

  const navigate = useNavigate();

  const validate = () => {
    const newErrors: FormErrors = {};

    // validazione del nome
    if (!name) {
      newErrors.name = "Hai dimenticato di inserire il tuo nome!";
    }

    // validazione del numero
    const phoneRegex = /^\d{10}$/;
    if (!phone) {
      newErrors.phone = "Hai dimenticato di inserire il tuo numero!";
    } else if (!phoneRegex.test(phone)) {
      newErrors.phone =
        "Devono essere 10 numeri, non puoi inserire lettere o caratteri speciali";
    }

    //   validazione email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = "Hai dimenticato di inserire il tuo numero!";
    } else if (!emailRegex.test(email)) {
      newErrors.email = `Questa email non è valida!`;
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };
  return (
    <form
      className={`form form-${size}`}
      onSubmit={handleSubmit}
      noValidate
      data-netlify="true"
    >
      {/* nome */}
      <div className="input-container">
        <div className="input-main">
          <span className="text-placeholder">o1</span>
          <div className="input-content">
            <label htmlFor="name">
              <span className="subtitle-M">Nome Completo *</span>
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Mario Rossi"
              className="text-paragraph-L"
              required
            />
          </div>
        </div>
        {errors.name && (
          <small className="text-placeholder">{errors.name}</small>
        )}
      </div>

      {/* Numero di Telefono */}
      <div className="input-container">
        <div className="input-main">
          <span className="text-placeholder">o2</span>
          <div className="input-content">
            <label htmlFor="name">
              <span className="subtitle-M">Numero di Telefono *</span>
            </label>
            <input
              type="phone"
              name="phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="phone number"
              placeholder="3783876455"
              className="text-paragraph-L"
              required
            />
          </div>
        </div>
        {errors.phone && (
          <small className="text-placeholder">{errors.phone}</small>
        )}
      </div>

      {/* email */}
      <div className="input-container">
        <div className="input-main">
          <span className="text-placeholder">o3</span>
          <div className="input-content">
            <label htmlFor="name">
              <span className="subtitle-M">Email *</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="fra@example.com"
              className="text-paragraph-L"
              required
            />
          </div>
        </div>
        {errors.email && (
          <small className="text-placeholder">{errors.email}</small>
        )}
      </div>

      {/* Messaggio */}
      <div className="input-container">
        <div className="input-main">
          <span className="text-placeholder">o4</span>
          <div className="input-content">
            <label htmlFor="name">
              <span className="subtitle-M">Messaggio</span>
            </label>
            <input
              type="textarea"
              name="message"
              id="message"
              placeholder="Ciao Fra, Vorrei il tuo aiuto per..."
              className="text-paragraph-L"
            />
          </div>
        </div>
      </div>

      {/* bottone */}
      <div className="button-container">
        <Button size="S" iconName="send" text="Invia" />
      </div>
    </form>
  );
};

export default Form;
