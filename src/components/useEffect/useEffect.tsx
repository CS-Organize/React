// https://www.youtube.com/watch?v=kyodvzc5GHU&list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO&index=2

import {useEffect, useState} from 'react';
import Timer from './timer/Timer';

export default function Effect() {
  const colors = ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9'];
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  const [showTimer, setShowTimer] = useState(false);

  useEffect(() => {
    console.debug(
      '%c rendered (useEffect with no dependencies)',
      `color: ${colors[0]}`,
    );
  });

  useEffect(() => {
    console.info(
      '%c rendered (useEffect with count dependency)',
      `color: ${colors[1]}`,
    );
  }, [count]);

  useEffect(() => {
    console.info(
      '%c rendered (useEffect with value dependency)',
      `color: ${colors[2]}`,
    );
  }, [value]);

  useEffect(() => {
    console.log(
      '%c mounted (useEffect with empty dependencies)',
      `color: ${colors[3]}`,
    );
  }, []);

  return (
    <div>
      <h1>useEffect</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>Count: {count}</p>
        input:{' '}
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      <button onClick={() => setShowTimer(!showTimer)}>Show Timer</button>
      {showTimer && <Timer />}
    </div>
  );
}
