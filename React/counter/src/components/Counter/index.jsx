import { useState } from "react";
import "./index.css"

const Counter = ({title, count:countProp, increment:incrementProp}) =>{
    const [count, setCount] = useState(countProp || 0);
    

    
    const increment = () =>{

        if(count-1 >=0){
            setCount((prevState) =>prevState-1);
        }
        if (incrementProp) {
            incrementProp("Message");
        }
    };

    const decrement = () => {

        setCount((prevState) => prevState +1)
    };


    return (
        <div className="counter">           
            <p>{title}</p>
            <div className="counter-buttons">
                <button onClick={increment} disabled={count === 0}>-</button>
                <span>{count}</span>
                <button onClick={decrement}>+</button>
            </div>
        </div>
    );
}

export default Counter;