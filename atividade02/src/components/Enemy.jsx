const Enemy = (props) => {
    return (
        <div className="enemy">
            <div className="enemy-text">
                <h1>{props.name}</h1>
                <p>{props.subtitle}</p>
            </div>
            <div className="enemy-image">
                <img src={props.image} alt="Enemy" />
            </div>
        </div>
    );
}

export default Enemy;