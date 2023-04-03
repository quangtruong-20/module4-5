import useIncrease from "./useIncrease";

export default function Counter2() {
    const [count,increase] = useIncrease(1);
    return (
        <>
            <h2>{count}</h2>
            <button
                onClick={()=>increase(2)}>Add 2</button>
        </>
    )
}