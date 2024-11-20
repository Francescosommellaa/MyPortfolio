# Portfolio di Francesco Sommella - Design by Fra

Questo repository contiene il codice sorgente del mio portfolio personale. È stato progettato per mostrare i miei lavori, le competenze e fornire un modo semplice per contattarmi.

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

## Struttura del Progetto

```plaintext
src/
├── assets/             # File statici come immagini
├── components/         # Componenti riutilizzabili (Navbar, Footer, ecc.)
│   ├── Navbar/
│   │   ├── Navbar.tsx
│   │   ├── Navbar.scss
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   ├── Footer.scss
│   ├── ProjectFooter/
│       ├── ProjectFooter.tsx
│       ├── ProjectFooter.scss
├── pages/              # File relativi alle pagine principali
│   ├── Home/
│   │   ├── Home.tsx
│   │   ├── Home.scss
│   ├── About/
│   │   ├── About.tsx
│   │   ├── About.scss
│   ├── Lavori/
│   │   ├── Lavori.tsx
│   │   ├── Lavori.scss
│   ├── Parliamo/
│   │   ├── Parliamo.tsx
│   │   ├── Parliamo.scss
│   ├── Progetto/
│       ├── Progetto.tsx
│       ├── Progetto.scss
├── styles/             # Stili globali e variabili
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _ui-kit.scss
│   ├── general.scss
├── App.tsx             # Punto di ingresso principale dell'app
├── main.tsx            # Monta l'app su ReactDOM
├── globals.d.ts        # Tipizzazioni per file SCSS

---

Configurazione del Progetto
Prerequisiti
Node.js: Versione >= 16
npm: Versione >= 8
Installazione
Clona il repository:
bash
Copia codice
git clone https://github.com/francescosommella/portfolio.git
cd portfolio
Installa le dipendenze:
bash
Copia codice
npm install
Script Disponibili
npm run dev: Avvia il server di sviluppo.
npm run build: Compila il progetto per la produzione.
npm run preview: Esegue una preview della build.
npm run lint: Analizza il codice per trovare problemi.

---

Configurazione Ambiente
Crea un file .env nella root del progetto per gestire le variabili d'ambiente. Esempio:

env
Copia codice
VITE_API_URL=https://api.example.com

---

Funzionalità Principali
Navigazione Dinamica: Navigazione tra le pagine tramite react-router-dom.
Responsive Design: Layout ottimizzato per desktop, tablet e mobile.
SEO e Accessibilità:
Metadati configurabili con react-helmet.
Test di accessibilità integrati con @axe-core/react.
Caricamento Ottimizzato: Immagini caricate dinamicamente con react-lazy-load-image-component.
Animazioni: Animazioni fluide con Framer Motion.

---

Come Contribuire
Se vuoi contribuire:

Fai un fork del repository.
Crea un branch per la tua funzionalità:
bash
Copia codice
git checkout -b feature/nome-funzionalità
Fai un commit delle modifiche:
bash
Copia codice
git commit -m "Aggiunta funzionalità: nome-funzionalità"
Esegui un push al tuo branch:
bash
Copia codice
git push origin feature/nome-funzionalità
Apri una pull request.

---

Contatti
Email: info@francescosommella.design
Portfolio Live: https://francescosommella.design
LinkedIn: https://www.linkedin.com/in/francescosommellaa
GitHub: https://www.github.com/francescosommellaa
Instagram: https://www.instagram.com/designby.fra
behance: https://www.behance.net/designby_fra
```
