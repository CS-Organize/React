// https://www.youtube.com/watch?v=VxqZrL4FLz8&list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO&index=3

/* 
1. 저장 공간
State의 변화 -> 렌더링 -> 컴포넌트 내부 변수들 초기화
Ref의 변화 -> No 렌더링 -> 변수들의 값이 유지됨
State의 변화 -> 렌더링 -> 그래도 Ref의 값은 유지됨

2. DOM에 접근
Document.querySelector()와 같은 방식으로 DOM에 접근 가능
focus() 등의 DOM 메서드 사용 가능

변화는 감지해야하지만 그 변화에 따라 렌더링을 할 필요가 없을 때 Ref 사용
*/

import {useState, useRef, useEffect} from 'react';
import classes from './useRef.module.css';

export default function Ref() {
  /* 1 */
  const [count, setCount] = useState(0);
  // 컴포넌트 생애주기 동안 유지되는 변수 (마운트 ~ 언마운트까지)
  const countRef = useRef(0);
  // 컴포넌트 내부 변수 (리렌더링 시 초기화)
  let countVar = 0;

  console.log('Rendering');
  console.log(countRef);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current++;
    console.log(countRef.current);
  };

  const increaseCountVar = () => {
    countVar++;
    console.log(countVar);
  };

  // 렌더링 -> useEffect -> setRenderCount -> 렌더링 -> useEffect -> setRenderCount -> ... 무한 반복
  // const [renderCount, setRenderCount] = useState(1);
  // useEffect(() => {
  //   setRenderCount(renderCount + 1);
  //   console.log(`Render count: ${renderCount}`);
  // });

  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log(`Render count: ${renderCount.current}`);
  });

  /* 2 */
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(inputRef);
    inputRef.current?.focus();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* 1 */}
      <h1>useRef</h1>
      <p>count: {count}</p>
      <p>countRef: {countRef.current}</p>
      <p>countVar: {countVar}</p>
      <button className={classes.button} onClick={increaseCount}>
        Increase count
      </button>
      <button className={classes.button} onClick={increaseCountRef}>
        Increase countRef
      </button>
      <button className={classes.button} onClick={increaseCountVar}>
        Increase countVar
      </button>
      {/* 2 */}
      <input
        className={classes.input}
        type="text"
        ref={inputRef}
        placeholder="username"
      />
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Login
      </button>
      {isModalOpen && (
        <div
          className={classes.modal}
          onClick={() => {
            setIsModalOpen(false);
            inputRef.current?.focus();
          }}
        >
          <h2>안녕하세요. {inputRef.current?.value}님</h2>
        </div>
      )}
    </div>
  );
}
