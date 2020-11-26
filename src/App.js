import { useFetcher } from "react-ufo"
import './App.css';
import octocat from "./img/octocat.png"

import JokeSearch from "./JokeSearch"
import JokeListing from "./JokeListing"

const fetchApi = async (url) => {
  const response = await fetch(url);
  return response.json();
}

const App = () => {
  const [fetchJokes, [loading, , data]] = useFetcher(fetchApi)

  return (
    <div className="app">
      <header className="app-header">
        <h1>Jokes on Chuck!</h1>
        <p>A React app for displaying Chuck Norris jokes from [The Internet Chuck Norris Database](http://www.icndb.com).</p>

      </header>
      <section className="app-content nes-container is-rounded is-dark">
        <JokeListing jokes={data ? data.value : []} />
        <JokeSearch onFetch={fetchJokes} loading={loading} />
      </section>
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
