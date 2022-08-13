import Button from '../Button';
import Timer from '../Timer';
import './style.scss';

const Pomodoro: React.FC = () => {
  return (
    <div className="pomodoro">
      <h2>You are working</h2>
      <Timer
        defaultTime={3000}
        shortRestTime={300}
        longRestTime={900}
        cycles={4}
      />
      <div className="controls">
        <Button title="Start" onClick={() => alert('eae')} />
        <Button title="Stop" onClick={() => alert('eae')} />
        <Button title="Reset" onClick={() => alert('eae')} />
      </div>
      <div className="details">
        <p>testetestetestetesteteste</p>
        <p>testetestetestetesteteste</p>
        <p>testetestetestetesteteste</p>
        <p>testetestetestetesteteste</p>
      </div>
    </div>
  );
};

export default Pomodoro;
