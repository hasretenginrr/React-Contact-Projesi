/*
import { useState, useEffect } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log("State update");
    }); // her butona tıkladığında state değiştiğinde
    useEffect(() => {
        console.log("Component is mounted");
        const interval = setInterval(() => {

            setNumber((n) => n + 1)
        }, 1000);
        return () => clearInterval(interval);

    },

        []); // sayfayı yenilediiğinde konsolda gösterecek. 

    return (
        <div>
            {number} <br />
            <button onClick={() => setNumber(number + 1)}>update</button>

        </div>
    )

}

export default Counter;
*/

