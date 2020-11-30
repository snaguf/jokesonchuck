import { useEffect, useState } from "react"
import "./JokeSearch.css"


const createCategories = (categories, old) => {
  if (categories && categories.value) {
    return Object.assign(categories.value.reduce((acc, value) => {
      const obj = { ...acc };
      obj[value] = true;
      return obj;
    }, {}), old)
  } else {
    return old
  }
}

const JokeSearch = ({ onFetch: fetchJokes, loading, categories }) => {
  const [jokeAmount, setJokeAmount] = useState(10);

  const [checkedCategories, setCheckedCategories] = useState({});

  useEffect(() => {
    setCheckedCategories(c => { return createCategories(categories.data, c) })
  }, [categories]);

  const handleAmountChange = (e) => {
    if (e.target.validity.valueMissing) setJokeAmount(null);
    if (e.target.checkValidity()) setJokeAmount(Number(e.target.value));
  }

  const handleCategoryChange = ({ target }) => {
    const obj = { ...checkedCategories };
    obj[target.name] = target.checked;
    setCheckedCategories(obj);
  }

  const jokeUrl = `https://api.icndb.com/jokes/random/${jokeAmount}?escape=javascript`;

  return (
    <div className="joke-search nes-container is-rounded is-dark">
      <div className="joke-categories" >
        {Object.entries(checkedCategories).map(([key, value]) => {
          return <label key={key}>
            <input type="checkbox" name={key}
              class="nes-checkbox is-dark" checked={value}
              onChange={handleCategoryChange} />
            <span>{key}</span>
          </label>
        })}

      </div>
      <div className="nes-field is-inline">
        <label for="joke-amount">Joke Count</label>
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
