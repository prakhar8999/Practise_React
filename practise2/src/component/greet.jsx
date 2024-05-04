import React from 'react'

function Greet({name}) {
    return (
        <div>
            <h1>Greeting Component</h1>
            <p>Hello, {name ? name : 'Guest'}!</p>
        </div>
    )
}

export default Greet
