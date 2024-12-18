import { useEffect, useState } from "react";

export const Time = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    const update = () => {
        setTime(new Date().toLocaleTimeString())


    }

    useEffect(()=>{const interval = setInterval(update, 1000);
      }, [])


    return (
        <>
            <p>{time}</p>
            
        </>
    );
};
