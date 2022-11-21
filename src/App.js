import "./App.css";

import LandingPage from "./LandingPage.js";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        {" "}
        <LandingPage />
      </main>
      <div className="read-more">
        <strong>Read more at </strong>
        <a
          href="https://www.ncausa.org/About-Coffee/History-of-Coffee"
          target="_blank"
          rel="noreferrer"
        >
          NCA - National Coffee Association
        </a>
      </div>
      <footer>
        Created by{" "}
        <a
          href="https://www.linkedin.com/in/laurassanches"
          target="_blank"
          rel="noopener noreferrer"
        >
          LSanches
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/LSSanches/dictionary"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://dictionarybylaura.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
