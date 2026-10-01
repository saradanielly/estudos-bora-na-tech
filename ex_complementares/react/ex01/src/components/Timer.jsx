import { useEffect, useState } from "react";


function Timer () {
const [tempo, setTempo] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setTempo((tempoAtual) => tempoAtual + 1)
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <h2> tempo: {tempo}</h2>
    )
}

export default Timer;