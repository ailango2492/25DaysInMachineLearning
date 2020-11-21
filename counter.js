import React from 'react';
// Don't modify this line. It is here to make React
// work correctly in this exercise environment.
const useState = React.useState;

// don't change the Component name "App"
export default function App() {
    const [currentCount, activeCount]=useState(0);
    const onButtonClick = () => {
     activeCount(currentCount+1);
    };
   //const currentCount=activeCount;
    
    return (
        <div>
            <button onClick={onButtonClick}>Click Me!</button>
            <h1>Current :{currentCount}</h1>
        </div>
    );
}
