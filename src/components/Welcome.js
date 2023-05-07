// write code for Welcome component here

// export default Welcome;
import React from 'react';

function Welcome({name}) {
    return (
        <div>
            <h1>Hey {name}!</h1>
            <h2>Welcome to Newton School.</h2>
        </div>
    );
}
export default Welcome;

