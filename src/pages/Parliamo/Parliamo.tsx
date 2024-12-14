import React from "react";

// SCSS
import "./Parliamo.scss";

// Components
import Form from "../../Components/Atoms/Form/Form";

// Hooks
import { useSize } from "../../Hooks/useSize";

const Parliamo: React.FC = () => {
  const Size = useSize();

  return (
    <main className="parliamo">
      {Size === "S" ? (
        <h3>Facciamo la Differenza Insieme</h3>
      ) : Size === "M" ? (
        <h2>Facciamo la Differenza Insieme</h2>
      ) : (
        <h1>Facciamo la Differenza Insieme</h1>
      )}

      <div className="parliamo-container">
        <div className="message-container">
          <img
            src={new URL(`/src/Assets/Me/Favicon.png`, import.meta.url).href}
            alt="My img"
            className="me"
          />
          <p className={`text-paragraph-${Size}`}>
            Parlami di te, del tuo progetto e delle tue idee. Ti risponderò
            presto per dare vita insieme a qualcosa di straordinario.
          </p>
        </div>

        <Form size={Size} />
      </div>
    </main>
  );
};

export default Parliamo;
