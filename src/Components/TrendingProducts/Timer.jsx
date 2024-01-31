import { useState, useEffect } from "react";

const Timer = () => {
  const countDownDate = new Date("Mar 31 2024 23:59:59").getTime();
  const [date, setDate] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const dateNow = new Date().getTime();
      const dateDiff = countDownDate - dateNow;
      const days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
      const hours = Math.floor(
        (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

      setDate({
        days: days < 10 ? `0${days}` : days,
        hours: hours < 10 ? `0${hours}` : hours,
        minutes: minutes < 10 ? `0${minutes}` : minutes,
        seconds: seconds < 10 ? `0${seconds}` : seconds,
      });
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="offer">
      <p>Offer ends at</p>
      <ul className="flexcenter">
        <li className="li days">{date.days}</li>
        <li className="li hours">{date.hours}</li>
        <li className="li mins">{date.minutes}</li>
        <li className="li seconds">{date.seconds}</li>
      </ul>
    </div>
  );
};

export default Timer;
