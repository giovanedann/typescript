import { useEffect, useState } from 'react';
import Button from '../Button';
import Timer from '../Timer';
import './style.scss';

const Pomodoro: React.FC = () => {
  const [isCounting, setIsCounting] = useState<boolean>(false);
  const [isWorking, setIsWorking] = useState<boolean>(false);
  const [isResting, setIsResting] = useState<boolean>(false);

  useEffect(() => {
    if (isWorking) document.body.classList.add('working');
    if (isResting) document.body.classList.remove('working');
  }, [isWorking]);

  function startWorking(): void {
    setIsCounting(true);
    setIsWorking(true);
    setIsResting(false);
  }

  function startResting(): void {
    setIsCounting(true);
    setIsWorking(false);
    setIsResting(true);
  }

  return (
    <div className="pomodoro">
      {!isWorking && !isResting ? null : (
        <h2>{`${isWorking ? 'Working' : 'Resting'}`}</h2>
      )}

      <Timer
        isCounting={isCounting}
        isWorking={isWorking}
        isResting={isResting}
        defaultTime={1800}
        shortRestTime={300}
        longRestTime={900}
        cycles={4}
      />
      <div className="controls">
        <Button
          className={isWorking ? 'working' : ''}
          title="Work"
          onClick={startWorking}
        />
        <Button
          className={isWorking ? 'working' : ''}
          title="Rest"
          onClick={startResting}
        />
        {!isWorking && !isResting ? null : (
          <Button
            className={isWorking ? 'working' : ''}
            title={isCounting ? 'Pause' : 'Continue'}
            onClick={() => setIsCounting(!isCounting)}
          />
        )}
      </div>
    </div>
  );
};

export default Pomodoro;
