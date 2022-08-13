export default function secondsToTime(seconds: number): string {
  const leftZero = (number: number) =>
    Math.floor(number).toString().padStart(2, '0');

  const timerMinutes = leftZero((seconds / 60) % 60);
  const timerSeconds = leftZero((seconds % 60) % 60);

  return `${timerMinutes}:${timerSeconds}`;
}
