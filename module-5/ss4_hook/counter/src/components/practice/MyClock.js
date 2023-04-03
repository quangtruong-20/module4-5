import "./Clock.css";
import useClock from "./useClock";

export default function MyClock() {
    const [time,ampm] = useClock();
    return (
        <>
            <div id="Clock-style">
                {time}
                <span>{ampm}</span>
            </div>
        </>

    );
}