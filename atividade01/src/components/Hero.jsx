const Hero = (props) => {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1>{props.name}</h1>
                <p>{props.subtitle}</p>
            </div>
            <div className="hero-image">
                <img src={props.image} alt="hero" />
            </div>
        </div>
    );
}

export default Hero;