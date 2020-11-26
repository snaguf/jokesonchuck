import "./JokeListing.css"

const Joke = ({ text, direction }) => {
  return <section className={`message -${direction}`}>
    <div className={`nes-balloon from-${direction} is-dark`}>
      <p>{text}</p>
    </div>
  </section>
}


const JokeListing = ({ jokes }) => {
  return <div className="joke-listing nes-container is-rounded is-dark">
    <div className="message-list">
      {jokes.map(({ joke }, i) => {
        return <Joke text={joke} direction={i % 2 === 0 ? "left" : "right"} />
      })}
    </div>
  </div>
}

export default JokeListing
