import { useState } from 'react';
import useInterval from '../../hooks/useInterval';
import secondsToTime from '../../utils/secondsToTime';
import './style.scss';

interface TimerProps {
  defaultTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
  isCounting: boolean;
}

const Timer: React.FC<TimerProps> = ({ defaultTime, isCounting }) => {
  const [time, setTime] = useState<number>(defaultTime);

  useInterval(() => {
      setTime((prevState) => prevState - 1);
    },
    isCounting ? 1000 : null,
  );

  return (
    <div className="timer-container">
      <p className="timer">{secondsToTime(time)}</p>
    </div>
  );
};

export default Timer;
