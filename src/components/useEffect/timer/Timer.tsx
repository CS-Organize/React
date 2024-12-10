import {useEffect} from 'react';

export default function Timer() {
  // 상태 변화 시 타이머
  // useEffect(() => {
  //   let sec = 0;
  //   setInterval(() => {
  //     console.log(`Timer: ${sec++}`);
  //   }, 1000);
  // });

  // 마운트 시 타이머
  useEffect(() => {
    let sec = 0;
    const timer = setInterval(() => {
      console.log(`Timer: ${++sec}`);
    }, 1000);

    // Unmount시 실행할 cleanup 함수
    return () => {
      clearInterval(timer);
      console.log('타이머가 종료됩니다.');
    };
  }, []);

  return (
    <div>
      <span>타이머가 시작됩니다.</span>
    </div>
  );
}
