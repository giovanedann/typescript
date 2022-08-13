import { useEffect, useState } from 'react';
import useInterval from '../../hooks/useInterval';
import secondsToTime from '../../utils/secondsToTime';
import './style.scss';

interface TimerProps {
  defaultTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
  isCounting: boolean;
  isWorking: boolean;
  isResting: boolean;
}

const Timer: React.FC<TimerProps> = ({
  defaultTime,
  shortRestTime,
  longRestTime,
  isCounting,
  isWorking,
  isResting,
  cycles,
}) => {
  const [time, setTime] = useState<number>(defaultTime);
  const [cyclesArray, setCyclesArray] = useState<boolean[]>(
    new Array(cycles - 1).fill(true),
  );

  useEffect(() => {
    if (isWorking) setTime(defaultTime);

    if (isResting && !cyclesArray.length) {
      setTime(longRestTime);
      setCyclesArray(new Array(cycles - 1).fill(true));
      return;
    }

    if (isResting && !!cyclesArray.length) {
      setTime(shortRestTime);
      cyclesArray.pop();
    }
  }, [isWorking, isResting]);

  useInterval(
    () => {
      setTime((prevState) => (prevState > 0 ? prevState - 1 : prevState));
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
