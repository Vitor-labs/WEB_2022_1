import React from "react"

const Arena = (props) => {
    return <div>
        <h2>
            Arena: {props.arena}
        </h2>
        {React.Children.map(props.children, hero => {
            return React.cloneElement(hero, { ...props })
        })}
    </div>
}

export default Arena;