import "./JokeListing.css"

const Joke = ({ text, direction }) => {
  return <section className={`-${direction}`}>
    <div className={`nes-balloon from-${direction} is-dark`}>
      <p>{text}</p>
    </div>
  </section>
}


const JokeListing = () => {
  return <div className="joke-listing nes-container is-rounded is-dark">
    <div className="message-list">
      <Joke text="Joke here!" direction="left" />
      <Joke text="Joke also here!" direction="right" />
    </div>
  </div>
}

export default JokeListing
