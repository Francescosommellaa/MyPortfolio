import React from "react";

// SCSS
import "./Parliamo.scss";
import Form from "../../Components/Atoms/Form/Form";

const Parliamo: React.FC = () => {
  return (
    <main className="parliamo">
      <h1>Facciamo la Differenza Insieme</h1>

      <div className="parliamo-container">
        <div className="message-container">
          <img
            src={new URL(`/src/Assets/Me/Favicon.png`, import.meta.url).href}
            alt="My img"
            className="me"
          />
          <p>
            Parlami di te, del tuo progetto e delle tue idee. Ti risponderò
            presto per dare vita insieme a qualcosa di straordinario.
          </p>
        </div>

        <Form size="L" />
      </div>
    </main>
  );
};

export default Parliamo;
