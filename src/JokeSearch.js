import { useState } from "react"
import "./JokeSearch.css"

const JokeSearch = ({ onFetch: fetchJokes, loading }) => {
  const [jokeAmount, setJokeAmount] = useState(10);

  const handleAmountChange = (input) => {
    const amount = Number(input)
    if (amount && amount >= 1) setJokeAmount(amount)
  }

  return (
    <div className="joke-search nes-container is-rounded is-dark">
      <div className="nes-field is-inline">
        <label for="joke-amount">Joke Count</label>
        <input type="number" id="joke-amount" className="nes-input" value={jokeAmount} onChange={e => { handleAmountChange(e.target.value) }} />
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
