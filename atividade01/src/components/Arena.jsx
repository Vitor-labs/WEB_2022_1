import React from "react"

let isFight = (value) => {
    if (value === true) {
        return "Fighting now!"
    } else {
        return "Waiting for opponent..."
    }
};

const Arena = (props) => {
    return <div>
        <h2>
            Arena: {props.arena} - {isFight(props.status)}
        </h2>
        {React.Children.map(props.children, hero => {
            return React.cloneElement(hero, { ...props })
        })}
    </div>
}

export default Arena;