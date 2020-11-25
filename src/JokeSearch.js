import { useFetcher } from "react-ufo"
import "./JokeSearch.css"

const jokeFetcher = async () => {
  const response = await fetch("http://api.icndb.com/jokes/random/10")
  return response.json();
}

const JokeSearch = () => {

  const [fetchJokes, [loading, error, data]] = useFetcher(jokeFetcher);

  return <div className="joke-search">
    <button
      className="nes-btn is-primary"
      onClick={e => { if (!loading) fetchJokes() }}
    >
      Fetch Jokes
    </button>
  </div>
}

export default JokeSearch;
