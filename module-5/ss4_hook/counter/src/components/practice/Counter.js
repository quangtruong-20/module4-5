import {useState} from "react";

export default function Counter() {
    let [count,setCount] = useState(0);


    function handleClick() {
        const  newValue = count + 1;
        return setCount(newValue);
    }

    return(
        <>
            Giá trị {count}
            <div>
                <button onClick={handleClick} >Tăng</button>

            </div>
        </>
    )
}