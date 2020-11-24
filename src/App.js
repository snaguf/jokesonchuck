import './App.css';
import octocat from "./img/octocat.png"

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Jokes on Chuck!</h1>
        <p>A React app for displaying Chuck Norris jokes from [The Internet Chuck Norris Database](http://www.icndb.com).</p>

      </header>
      <footer className="app-footer">
        <a href="https://github.com/snaguf/jokesonchuck">
          <img className="logo" src={octocat} alt="GitHub" />
        </a>
        <a className="license" href="https://github.com/snaguf/jokesonchuck/blob/main/LICENSE.md">&copy; 2020 Joonas Nordlund</a>
      </footer>
    </div>
  );
}

export default App;
