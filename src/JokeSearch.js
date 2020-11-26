import "./JokeSearch.css"

const JokeSearch = ({ onFetch: fetchJokes, loading }) => {

  return <div className="joke-search">
    <button
      className="nes-btn is-primary"
      onClick={e => { if (!loading) fetchJokes("http://api.icndb.com/jokes/random/10") }}
    >
      Fetch Jokes
    </button>
  </div>
}

export default JokeSearch;
