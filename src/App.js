import { useFetcher } from "react-ufo"
import './App.css';
import octocat from "./img/octocat.png"

import JokeSearch from "./JokeSearch"

const fetchApi = async (url) => {
  const response = await fetch(url);
  return response.json();
}

const App = () => {
  const [fetchJokes, [loading, error, data]] = useFetcher(fetchApi)

  return (
    <div className="app">
      <header className="app-header">
        <h1>Jokes on Chuck!</h1>
        <p>A React app for displaying Chuck Norris jokes from [The Internet Chuck Norris Database](http://www.icndb.com).</p>
        <JokeSearch onFetch={fetchJokes} loading={loading} />
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
