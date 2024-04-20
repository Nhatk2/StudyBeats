import React, { useState, useEffect } from "react";
import Todolist from "./todolist";


const CountdownTimer = () => {
  const [isBreakTime, setIsBreakTime] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 phút tính bằng giây
  const [timerRunning, setTimerRunning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer;
    if (timerRunning) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime === 0) {
            clearInterval(timer);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timerRunning]);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsBreakTime(prevIsBreakTime => !prevIsBreakTime);
      setTimerRunning(false);
    }
  }, [timeLeft]);

  const startTimer = () => {
    setIsPlaying(!isPlaying);
    setTimerRunning(true);

  };

  const stopTimer = () => {
    setTimerRunning(false);
  };

  const resetTimer = () => {
    setTimeLeft(30 * 60);
    setIsBreakTime(false);
    setTimerRunning(false);
  };

  return (
    <div className="countdown-timer">
      <div className="group">
        <div className="timer">
          <h2>{Math.floor(timeLeft / 60)}:{("0" + (timeLeft % 60)).slice(-2)}</h2>     
        </div>
        <div className="controls">
          {/* <button style={{width:'2rem' , height:'2rem' , marginRight:'10px'}} onClick={startTimer}><i class="fa-solid fa-play"></i></button>
          <button style={{width:'2rem' , height:'2rem'}} onClick={stopTimer}><i class="fa-solid fa-pause"></i></button> */}
        </div>
      </div>
      <p className="btn">{isBreakTime ? "Break Time" : "Focus Time"}</p>
    </div>
  );
};

export default CountdownTimer;

