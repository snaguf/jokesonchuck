import "./JokeSearch.css"

const JokeSearch = ({ onFetch: fetchJokes, loading }) => {

  return <div className="joke-search">
    <button
      className="nes-btn is-primary"
      onClick={e => { if (!loading) fetchJokes("https://api.icndb.com/jokes/random/10?escape=javascript") }}
    >
      Fetch Jokes
    </button>
  </div>
}

export default JokeSearch;
