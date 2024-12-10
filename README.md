# Portfolio di Francesco Sommella - Design by Fra

Questo repository contiene il codice sorgente del mio portfolio personale. È stato progettato per mostrare i miei lavori, le competenze e fornire un modo semplice per contattarmi.

---

## Tecnologie Utilizzate

- **React.js**: Libreria per la creazione di interfacce utente.
- **TypeScript**: Superset di JavaScript per la tipizzazione statica.
- **Vite**: Bundler per un'esperienza di sviluppo veloce.
- **SCSS**: Per una gestione avanzata degli stili.
- **React Router**: Per la navigazione tra le pagine.
- **Framer Motion**: Per animazioni fluide.
- **Librerie aggiuntive**:
  - `date-fns`: Per la gestione delle date.
  - `react-lazy-load-image-component`: Per il caricamento pigro delle immagini.
  - `@axe-core/react`: Per testare l'accessibilità.

---

## 📂 Struttura del Progetto

### Configurazione del Progetto

Prerequisiti
Node.js: Versione >= 16
npm: Versione >= 8

### Clona il repository:

```plaintext

git clone https://github.com/francescosommella/portfolio.git
cd portfolio

```

### Installa le dipendenze:

```plaintext

npm install

```

---

## 📄 Struttura dei File

```plaintext

src/
├── assets/             # File statici come immagini
│   ├── Icon-Tools/     # Icone e immagini relative agli strumenti
│   │   ├── Icon/
│   │   ├── Tools/
│   ├── Me/             # Immagini personali
│   ├── Project-img/    # Immagini relative ai progetti
│       ├── Project-Cover/  # Copertine dei progetti
├── components/         # Componenti riutilizzabili
│   ├── Atoms/          # Componenti elementari
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Buttons.scss
│   │   ├── Logo/
│   │   │   ├── Logo.tsx
│   │   │   ├── Logo.scss
│   │   ├── SectionTitle/
│   │   │   ├── SectionTitle.tsx
│   │   │   ├── SectionTitle.scss
│   │   ├── WorkCards/
│   │       ├── WorkCards.tsx
│   │       ├── WorkCards.scss
│   ├── Molecules/      # Componenti composti
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   ├── Footer.scss
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   ├── Hero.scss
│   │   ├── Navbar/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Navbar.scss
│   │   ├── Tools/
│   │   │   ├── Tools.tsx
│   │   │   ├── Tools.scss
│   │   ├── Work/
│   │       ├── Work.tsx
│   │       ├── work.scss
│   ├── DB/             # Dati statici
│       ├── NavLink.ts
│       ├── Projects.ts
│       ├── ToolsImg.ts
├── pages/              # File relativi alle pagine principali
│   ├── Home/
│   │   ├── Home.tsx
│   │   ├── Home.scss
│   ├── About/
│   │   ├── About.tsx
│   │   ├── About.scss
│   ├── Parliamo/
│   │   ├── Parliamo.tsx
│   │   ├── Parliamo.scss
│   ├── Project/
│       ├── Project.tsx
│       ├── Project.scss
├── styles/             # Stili globali e variabili
│   ├── _variables.scss # Variabili globali SCSS
│   ├── _mixins.scss    # Mixin SCSS riutilizzabili
│   ├── _typography.scss # Gestione tipografica
│   ├── general.scss    # Stili globali
├── App.tsx             # Punto di ingresso principale dell'app
├── main.tsx            # Monta l'app su ReactDOM
├── vite-env.d.ts       # Tipizzazioni per file SCSS

```

---

## Funzionalità Principali

Navigazione Dinamica: Navigazione tra le pagine tramite react-router-dom.
Responsive Design: Layout ottimizzato per desktop, tablet e mobile.
Caricamento Ottimizzato: Immagini caricate dinamicamente con react-lazy-load-image-component.
Animazioni: Animazioni fluide con Framer Motion.

---

## Come Contribuire

Fai un fork del repository.
Crea un branch per la tua funzionalità:

```plaintext

git checkout -b feature/nome-funzionalità

```

Fai un commit delle modifiche:

```plaintext

git commit -m "Aggiunta funzionalità: nome-funzionalità"

```

Esegui un push al tuo branch:

```plaintext

git push origin feature/nome-funzionalità

```

Apri una pull request.

---

## Contatti

Email: info@francescosommella.design

Portfolio Live: https://francescosommella.design

Linkedin: https://www.linkedin.com/in/francescosommellaa

GitHub: https://www.github.com/francescosommellaa

Instagram: https://www.instagram.com/designby.fra

Behance: https://www.behance.net/designby_fra
