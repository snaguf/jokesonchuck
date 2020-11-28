import { useState } from "react"
import "./JokeSearch.css"

const JokeSearch = ({ onFetch: fetchJokes, loading }) => {
  const [jokeAmount, setJokeAmount] = useState(10);

  const handleAmountChange = (e) => {
    if (e.target.validity.valueMissing) setJokeAmount(null)
    if (e.target.checkValidity()) setJokeAmount(Number(e.target.value))
  }

  return (
    <div className="joke-search nes-container is-rounded is-dark">
      <div className="nes-field is-inline">
        <label for="joke-amount">Joke Count</label>
        <input type="number" min={1} required={true} id="joke-amount"
          className={`nes-input ${!jokeAmount ? "is-error" : ""}`} value={jokeAmount}
          onChange={e => { handleAmountChange(e) }} />
      </div>
      <button
        className="nes-btn is-primary"
        onClick={e => { if (!loading) fetchJokes("https://api.icndb.com/jokes/random/10?escape=javascript") }}
      >
        Fetch Jokes
    </button>
    </div>
  )
}

export default JokeSearch;
