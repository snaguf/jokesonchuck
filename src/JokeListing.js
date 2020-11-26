import "./JokeListing.css"

import walker from "./img/walker.png"

const Joke = ({ text, direction }) => {
  return <section className={`message -${direction}`}>
    <div className={`nes-balloon from-${direction} is-dark`}>
      <p>{text}</p>
    </div>
  </section>
}

const NoJokes = () => {
  return <div className="walker-joke -right">
    <section className="messge walker-message">
      <div className="nes-balloon from-right is-dark ">
        <p>There are no jokes!</p>
      </div>
    </section>
    <img className="walker -right" src={walker} alt="Brodel Walker" />
  </div>
}

const Jokes = ({ jokes }) => {
  return jokes.map(({ joke }, i) => {
    return <Joke text={joke} direction={i % 2 === 0 ? "left" : "right"} />
  })
}

const JokeListing = ({ jokes }) => {
  console.log(jokes.length)
  return <div className="joke-listing nes-container is-rounded is-dark">
    <div className="message-list">
      {jokes.length === 0 ? <NoJokes /> : <Jokes jokes={jokes} />}
    </div>
  </div>
}

export default JokeListing
