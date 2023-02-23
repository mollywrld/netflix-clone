import "../root.css";

const Hero = ({ text, backdrop }) => {
  return (
    <header className=" text-dark p-5 hero-container">
      <h1 className="hero-text">{text}</h1>
      {backdrop &&
        <div className="hero-backdrop" style={{backgroundImage: `url(${backdrop})`}}></div>
      }
    </header>
  )
}

export default Hero;