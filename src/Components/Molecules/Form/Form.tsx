import React, { useState } from "react";
import FormInfo from "../../DB/FormInfo";

// SCSS
import "./Form.scss";

// Atoms
import Button from "../../Atoms/Button/Button";

interface FormDataprops {
  size: "S" | "M" | "L";
}

const Form: React.FC<FormDataprops> = ({ size }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name)
      newErrors.name = "Hai dimenticato di inserire il nome completo.";
    if (!formData.phone) {
      newErrors.phone = "Hai dimenticato di inserire il numero di telefono.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Inserisci un numero di telefono valido (10 cifre).";
    }
    if (!formData.email) {
      newErrors.email = "Hai dimenticato di inserire l'email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Inserisci una email valida.";
    }
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccessMessage(
        "Grazie mille per aver compilato il form! Ti risponderò al più presto."
      );

      setTimeout(() => setSuccessMessage(""), 6000);

      const form = e.currentTarget;
      const formData = new FormData(form);

      try {
        await fetch("/", {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        form.reset();
      } catch (error) {
        console.error("Errore durante l'invio del form:", error);
        setSuccessMessage("Si è verificato un errore. Per favore riprova.");
        setTimeout(() => setSuccessMessage(""), 6000);
      }
    }
  };

  return (
    <form
      className={`form form-${size}`}
      noValidate
      data-netlify="true"
      name="contact-form"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact-form" />

      {successMessage && (
        <small className="text-placeholder success-message">
          {successMessage}
        </small>
      )}

      {/* input */}
      {FormInfo.map((form) => (
        <div className="input-main" key={form.id}>
          <span className="text-placeholder">{form.number}</span>
          <div className="input-content">
            <label htmlFor={form.id}>
              <span className={`subtitle-${size}`}>{form.label}</span>
            </label>
            {form.type === "textarea" ? (
              <textarea
                name={form.name}
                id={form.id}
                placeholder={form.placeholder}
                className={`text-paragraph-${size}`}
                maxLength={150}
                onChange={handleChange}
              ></textarea>
            ) : (
              <input
                type={form.type}
                name={form.name}
                id={form.id}
                placeholder={form.placeholder}
                className={`text-paragraph-${size}`}
                onChange={handleChange}
                onInput={(e) => {
                  if (form.id === "phone") {
                    const target = e.target as HTMLInputElement;
                    target.value = target.value.replace(/[^0-9]/g, "");
                  }
                }}
                required
              />
            )}
            {errors[form.id as keyof typeof errors] && (
              <small className="text-placeholder error-message">
                {errors[form.id as keyof typeof errors]}
              </small>
            )}
          </div>
        </div>
      ))}

      {/* bottone */}
      <div className="button-container">
        <Button size="S" iconName="send" text="Invia" />
      </div>
    </form>
  );
};

export default Form;
