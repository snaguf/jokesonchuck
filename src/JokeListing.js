import "./JokeListing.css"

import walker from "./img/walker.png"

const Joke = ({ text, direction }) => {
  return <section className={`message -${direction}`}>
    <div className={`nes-balloon from-${direction} is-dark`}>
      <p>{text}</p>
    </div>
  </section>
}

const NoJokes = ({ message }) => {
  return <div className="walker-joke -right">
    <section className="messge walker-message">
      <div className="nes-balloon from-right is-dark ">
        <p>{message}</p>
      </div>
    </section>
    <img className="walker -right" src={walker} alt="Brodel Walker" />
  </div>
}

const Jokes = ({ jokes }) => {
  return jokes.map(({ id, joke }, i) => {
    return <Joke key={id} text={joke} direction={i % 2 === 0 ? "left" : "right"} />
  })
}

const JokeListing = ({ jokes, error }) => {

  const message = error ? error.message : "There are no jokes! Fetch!"

  return <div className="joke-listing nes-container is-rounded is-dark">
    <div className="message-list">
      {jokes.length === 0 ? <NoJokes message={message} /> : <Jokes jokes={jokes} />}
    </div>
  </div>
}

export default JokeListing
