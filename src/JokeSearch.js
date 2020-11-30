import { useState } from "react"
import "./JokeSearch.css"


const JokeSearch = ({ onFetch: fetchJokes, loading, categories }) => {
  const [jokeAmount, setJokeAmount] = useState(10);

  const [checkedCategories, setCheckedCategories] = useState([]);

  const handleAmountChange = (e) => {
    if (e.target.validity.valueMissing) setJokeAmount("");
    if (e.target.checkValidity()) setJokeAmount(Number(e.target.value));
  }

  const handleCategoryChange = ({ target }) => {
    if (target.checked) {
      setCheckedCategories(c => [...c, target.name])
    } else {
      setCheckedCategories(c => c.filter(value => value !== target.name))
    }
  }

  const categoryParameter = checkedCategories.length !== 0 ? `&limitTo=[${checkedCategories}]` : "";

  const jokeUrl = `https://api.icndb.com/jokes/random/${jokeAmount}?escape=javascript${categoryParameter}`;

  return (
    <div className="joke-search nes-container is-rounded is-dark">
      <div className="joke-categories" >
        {categories.map((category) => {
          return <label key={category}>
            <input type="checkbox" name={category}
              className="nes-checkbox is-dark" checked={checkedCategories.includes(category)}
              onChange={handleCategoryChange} />
            <span>{category}</span>
          </label>
        })}
      </div>
      <div className="nes-field is-inline">
        <label htmlFor="joke-amount">Joke Count</label>
        <input type="number" min={1} required={true} id="joke-amount"
          className={`nes-input ${!jokeAmount ? "is-error" : ""}`} value={jokeAmount}
          onChange={e => { handleAmountChange(e) }} />
      </div>
      <button
        className={`nes-btn ${jokeAmount ? "is-primary" : "is-disabled"}`}
        disabled={!jokeAmount}
        onClick={e => { if (!loading) fetchJokes(jokeUrl) }}
      >
        Fetch Jokes
    </button>
    </div>
  )
}

export default JokeSearch;
