import useIncrease from "./useIncrease";

export default function Counter1() {

    const [count,increase] = useIncrease(1);
    return (
        <>
            <h2>{count}</h2>
            <button
            onClick={()=>increase(1)}>Add 1</button>
        </>
    )
}